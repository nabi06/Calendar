import {useState,React} from 'react'
import Todo from './Todo'
function Calendar() {
    const today=new Date()
    const [mnth,setMnth]=useState(today.getMonth())
    const [year,setYear]=useState(today.getFullYear())
    const [task,setTask]=useState([])
    const [dayte,setDayte]=useState()
    const todaydate= `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    console.log(todaydate)
    
    const arr = [ "Jan", "Feb","Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep","Oct",
        "Nov","Dec", ];
    const [todo,setTodo]=useState(false)
    function handlePrev(){
    if (mnth===0){
        setYear(year-1)
        setMnth(11)
    }else{
        setMnth(mnth-1)
    }
    
    }
    function handleNext(){
        if (mnth===11){
            setYear(year+1)
            setMnth(0)
            
        }else{
            setMnth(mnth+1)
        }  
        setDayte(null)
    }
    function getDaysInMonth(mnth,year){
        return new Date(year,mnth+1,0).getDate()
    }
    function firstDayOfMonth(mnth,year){
        return new Date(year,mnth,1).getDay()
    }
    function rendercalenderdays(){
        let Calender=[]
        // const presentmnth=today.getMonth()
        // const presentyear=today.getFullYear()
        const daysInMonth=getDaysInMonth(mnth,year)
        const firstDay=firstDayOfMonth(mnth,year)
        for(let i=0;i<firstDay;i++){
            Calender.push(null)
        }
        for (let i=1;i<daysInMonth;i++){
            
            Calender.push({day:`${year}-${mnth+1}-${i}`,tasks:[],id:i})
            
        }
        
        
        return Calender
    }
    const calenderdays= rendercalenderdays()
    
    function addTask(day){
        setTodo(true)
        setDayte(day)
        
    }
   



  return (

   <>
   <button  onClick={handlePrev}>Prev
   
   </button>
   {arr[mnth]}-{year}
   <button onClick={handleNext}>Next</button> 
   <div className='calendar-grid' >
   {calenderdays.map((day,index)=>{
    if(day==null){
        return <button className='calender-day'></button>
    }else{
        console.log(task)

       return  <button className={todaydate===day.day?'calender-days':'calender-day'} onClick={()=>addTask(day.day)}>{day.day}
       
       {task.map((task1,index)=>{
            if(task1.date==day.day){
                return <p style={{textDecoration:task1.completed ?"line-through":"none"}}>{task1.text}</p>
            }
           
       })}
       </button>
    }
   })}
   </div>
   {todo && <Todo task={task} setTask={setTask} dayte={dayte} 
   
   />}
    
   
   </>
  )
}

export default Calendar



// // to do 
// adding of date to the task and in todo 