import waves from './images/waves.jpg'
import Todolist from './Todolist'

const App = () => {
  return (
    <main className="bg-sky-300 bg-opacity-50">
      <img src={waves} alt="" className="absolute opacity-40 h-screen w-screen object-cover" />
      <div className="min-h-screen flex flex-wrap  relative">
        <Todolist />
      </div>
    </main>
  )
}

export default App
