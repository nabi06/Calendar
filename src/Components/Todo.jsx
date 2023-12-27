import {useState,React} from 'react'



function Todo({task,setTask,dayte}) {
   const [inputText,setInputText]=useState('')
  
   
    function addTask(e){
       e.preventDefault()
       if(inputText){
         const newTask={date:dayte,id:task.length+1, text:inputText,completed:false}
        setTask([...task,newTask])
        setInputText('')
        console.log("dayyy",dayte)
        console.log(task)
       } 
    }
    
    const filtertask=task.filter(task1=>{
        return task1.date=== dayte
        
    })
    // onfilter(filtertask)
    
    
    function toggleComplete(id){
      // console.log("hi",index)
      const index= task.findIndex((taskitem)=>{
        console.log("id",id,taskitem.id)
        return taskitem.id===id
      })
        console.log("task",task, index)
        const newtask=[...task]
        console.log("b",newtask[index].completed)
        newtask[index].completed=!newtask[index].completed
        console.log("a",newtask)

        setTask(newtask);
        
    }
    function deleteTasks(task){
        setTask(prev=>prev.filter(item=>{
            return item.text!=task.text;
        }))

    }



    ///return functions 
  return (
   <div className="to-do">
     <h1>Todo - {dayte}</h1>
    <div className="todo-com">
        <input type='text' placeholder='enter task'value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}></input>
        <button className='btn1' onClick={addTask}>ADD</button>
    </div>
  <div className="tasks">
    {filtertask.map((task,index)=>(
        <p key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
        
        <button onClick={() => toggleComplete(task.id)}>Complete</button>
        <button onClick={() => deleteTasks(task)}>X</button>
        </p>
    ))}
  </div>
  
   </div>
    
  )
}

export default Todo

///fill task at function filltasking  