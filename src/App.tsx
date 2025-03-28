import { useState } from 'react'
import MovieWrapper from './components/MovieWrapper';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-zinc-900 p-10'>
        <h1 className='text-3xl font-bold text-white mb-5'> OMDB Movies</h1>
        <MovieWrapper />
      </div>
    </>
  )
}

export default App
