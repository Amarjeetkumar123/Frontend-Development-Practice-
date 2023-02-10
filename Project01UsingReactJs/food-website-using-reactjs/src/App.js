import React from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Home from './components/pages/Home'
import Layout from './components/Layout'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App