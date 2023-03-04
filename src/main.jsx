import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'

import 'animate.css'
import './variables.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='animate__animated animate__fadeInLeft'>
      <App />
    </div>
  </React.StrictMode>,
)
