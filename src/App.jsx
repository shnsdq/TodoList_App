import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{

  }

  const handleDelete = ()=>{

  }

  const handleAdd = ()=>{
     setTodos([...todos, {id:uuidv4(), todo, isCompleted:false}])
     setTodo("")
  }
  const handleChange = (e)=>{
     setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-2">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input onChange={handleChange} value={todo} className='bg-white outline-none w-1/2' type="text" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-1 p-2 rounded-md mx-6'> Add </button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className='todos'>
          {
            todos.map((item, index) => (
             
          <div key={todo} className='todo flex w-1/4 my-3 justify-between'>
            <input type="checkbox" value={todo.isCompleted} name="" id="" />
            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-1 p-2 rounded-md mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold py-1 p-2 rounded-md mx-1'>Delete</button>
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
