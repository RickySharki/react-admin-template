import React from 'react'
import ReactDOM from 'react-dom/client'
// unocss注入
import 'virtual:uno.css'
import App from './App.tsx'
// 样式引入
import '@/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
