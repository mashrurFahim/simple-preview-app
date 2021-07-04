import './App.css'
import MainComponent from './Components/MainComponent'

function App() {
  return (
    <div className='container mx-auto bg-gray-100 w-full h-screen relative'>
      <header className='py-8 flex justify-center items-center border-b-2 border-black-100'>
        <h1 className='text-center'>This is a test</h1>
      </header>
      <MainComponent />
      <footer className='py-8 bg-gray-200 w-full'>
        <h2>This is a footer</h2>
      </footer>
    </div>
  )
}

export default App
