import { useState } from 'react'
import './index.css'

import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Main>
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
