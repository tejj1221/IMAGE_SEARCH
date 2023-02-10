import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Main from './main'
import Book from './bookmark'
export default function Imagesearch() {
    const [book,setbook]=useState([])
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main setbook={setbook}/>}/>
        <Route path="/book" element={<Book book={book}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

