import Form from './Form'

const Todolist = () => {
  return (
    <div className="mx-auto self-center px-16">
      <div className="mx-auto py-2 px-4 text-center rounded-2xl bg-sky-500 bg-opacity-20 w-96">
        <h2 className="font-bold text-4xl">TODOLIST</h2>
        <Form />
      </div>
    </div>
  )
}

export default Todolist
