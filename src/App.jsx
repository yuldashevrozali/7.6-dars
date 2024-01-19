import './App.css'
import Main from './components/Main'
import Rommands from './components/commands'

function App() {

  return (
    <>
      <div className='h-full grid grid-cols-[1fr_2fr_1fr]'>
        <div className='border'></div>
        <Main />
        <Rommands />
        
      </div>

    </>
  )
}

export default App
