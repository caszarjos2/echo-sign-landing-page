import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EchoSignsLanding from './landing-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EchoSignsLanding />
  </StrictMode>,
)
