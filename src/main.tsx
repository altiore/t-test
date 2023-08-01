import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={'https://altiore.github.io/t-test/tonconnect-manifest.json'}>
    <App />
  </TonConnectUIProvider>
)
