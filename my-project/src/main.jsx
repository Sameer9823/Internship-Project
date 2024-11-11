import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './component/Layout/layout.jsx'
import Contact from './component/Contact/contact.jsx'

import Products from './component/Products/products.jsx'

import Homepage from './component/homepage.jsx'
import Navabout from './component/NavAbout/NavAbout.jsx'
import Events from './component/Events/events.jsx'
import Demo from './component/Demo/Demo.jsx'
import Scheme from './component/Scheme/Scheme.jsx'
import WasteManagement from './component/Products/Waste.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<Navabout />} />
      <Route path='products' element={<Products />} />
      <Route path='event' element={<Events />} />
      <Route path='demo' element={<Demo />} />
      <Route path='govern' element={<Scheme />} />
      <Route path='waste' element={<WasteManagement />} />

      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
