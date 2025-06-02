import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-grow mt-3'>
        <Hero />
      </main>
    </div>
    
  )
}

export default App
