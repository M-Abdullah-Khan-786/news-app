import React, { useState } from 'react'
import Navbar from './Components/NavbarNews'
import NewsBoard from './Components/NewsBoard'
import FooterNews from './Components/FooterNews'

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <FooterNews />
    </>
  )
}

export default App