
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext } from "react";
import Home from '../Containers/Pages/Home'
import Books from '../Containers/Pages/Books'
import Units from '../Containers/Pages/Units'
import Parts from '../Containers/Pages/Parts'
import Score from '../Containers/Pages/Score'

export const Context = createContext()

function App() {
  const [books, setBooks] = useState("start")
  const [unit, setUnit] = useState(1)
  const [part, setPart] = useState("A")
  // Home
  // Books
  // Units
  // Parts
  return (
    <Context.Provider value={{
      books, setBooks,
      unit, setUnit,
      part, setPart
    }}>


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SingUp/>}/> */}

        <Route path='/home' element={<Home />}/>
        <Route path='/:book' element={<Books />}/>
        <Route path='/:book/unit:unit' element={<Units />}/>
        <Route path='/:book/unit:unit/part:part' element={<Parts />}/>
        <Route path='/:book/unit:unit/part:part/score' element={<Score />}/>
        
        {/* <Route path='/404' element={<NotFound/>}/> */}
      </Routes> 
  </BrowserRouter>
</Context.Provider>
  );
}

export default App;
