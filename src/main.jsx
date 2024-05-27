
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {routes} from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>,
)
