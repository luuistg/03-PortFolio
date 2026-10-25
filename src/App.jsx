import './index.css'

import { Header } from './components/navigation/Header.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/navigation/Footer.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
