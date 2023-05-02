import React from 'react'
import { RouterProvider } from 'react-router-dom'
import rooter from './router'
import '../src/css/style.css'

function App() {
  return <RouterProvider router={rooter} />
}
export default App
