import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Card from './components/card'
function App() {

  return (
    <div className='relative w-full flex-col justify-center items-center'>
       <Nav />
        <Hero />
        <Card />
    </div>
  )
}

export default App
