import  { useTheme } from "antd-style";

const Content = () => {
  const token: any = useTheme();
  return (
    <>
      <h1
        style={{
          color: token.FontColor,
        }}
      >
        Content
      </h1>
    </>
  );
};

export default Content;
