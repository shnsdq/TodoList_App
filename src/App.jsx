import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")

    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()

  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className=" mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className='font-bold text-center text-3xl'>Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add Todo</h2>
          <div className='flex'>
            <input onChange={handleChange} value={todo} className='bg-white outline-none w-full rounded-full px-5 py-1' type="text" />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-2 p-4 disabled:opacity-50 mx-2 rounded-full'> Save </button>
          </div>
        </div>
        <input type="checkbox" id="show" checked={showFinished} onChange={toggleFinished} className='my-4' />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <hr className='h-[1px] bg-gray-600 opacity-15 w-3/4 mx-auto my-2' />
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className='todos'>
          {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
          {
            todos.map((item) => (

              (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex my-3 justify-between '>
                <div className='flex gap-5 '>
                  <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                  <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-1 p-2 rounded-md mx-1'><FaEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-1 p-2 rounded-md mx-1'><MdDelete /></button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
