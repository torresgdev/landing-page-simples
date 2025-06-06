import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-grow mt-3'>
        <Hero />
        <Features />
        <About />
      </main>

      <Footer />
    </div>
    
  )
}

export default App
