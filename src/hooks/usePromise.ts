import { useState, useEffect, useRef } from "react";

function usePromise<T, TArgs extends any[] = []>(
  func: (...args: TArgs) => Promise<T> | T,
  start: T | null = null,
  option: { immediate?: boolean; clearOnRefresh?: boolean } = {
    immediate: true,
    clearOnRefresh: false,
  }
): {
  result: T | null;
  error: unknown;
  isLoading: boolean;
  refresh: (...args: TArgs) => Promise<T>;
  onReceive: (callback: (response: T) => void) => void;
  onError: (callback: (err: unknown) => void) => void;
} {
  const [result, setResult] = useState<T | null>(start);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(
    option.immediate || false
  );

  const receiveCallbacks = useRef<((response: T) => void)[]>([]);
  const errorCallbacks = useRef<((err: unknown) => void)[]>([]);

  const onReceive = (callback: (response: T) => void) => {
    receiveCallbacks.current.push(callback);
  };

  const onError = (callback: (err: unknown) => void) => {
    errorCallbacks.current.push(callback);
  };

  useEffect(() => {
    return () => {
      receiveCallbacks.current.length = 0;
      errorCallbacks.current.length = 0;
    };
  }, []);

  const refresh = (...args: TArgs) => {
    return new Promise<T>((resolve, reject) => {
      setIsLoading(true);
      if (option.clearOnRefresh) {
        setResult(start as T | null);
      }
      Promise.resolve(func(...args))
        .then((r) => {
          setResult(r);
          if (receiveCallbacks.current.length > 0) {
            receiveCallbacks.current.forEach((callback) => callback(r));
          }
          resolve(r);
        })
        .catch((err) => {
          setError(err);
          if (errorCallbacks.current.length > 0) {
            errorCallbacks.current.forEach((callback) => callback(err));
          }
          reject(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  useEffect(() => {
    if (option.immediate) {
      refresh;
    }
  }, [option.immediate]);

  return { result, error, isLoading, refresh, onReceive, onError };
}

export default usePromise;
