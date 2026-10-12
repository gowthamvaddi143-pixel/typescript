import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './componenets/home.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { MuiDemo } from './componenets/mui-demo.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiDemo />
  </StrictMode>
)
 