import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 51bba01626970c304e9ccd8819bc9f7f810af98e

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <App />
    </BrowserRouter>
  </StrictMode>,
=======
      <App />
    </BrowserRouter>
  </StrictMode>
>>>>>>> 51bba01626970c304e9ccd8819bc9f7f810af98e
)
