import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../example/src/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
