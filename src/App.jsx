
import { useState } from 'react'
import './App.css'
import Cart from './component/Cart/Cart'
import Courses from './component/Courses/Courses'


function App() {
  // eslint-disable-next-line no-unused-vars

  const [carts, setCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(40)
  const [addCredit, setAddCredit] = useState(0)
  
  const handlerSelection = (course) =>{
    const alreadyExist = carts.find(c => c.id == course.id );
    if(!alreadyExist){
        const newData = [...carts,course]
        setCarts(newData)
    }
    else{
      alert('already Exist')
    }

    // *****
    if(remainingHour !== 0 && remainingHour  > course.credit){
      setRemainingHour(remainingHour - course.credit)
      setAddCredit(addCredit + course.credit)
    }
    else{
      alert('only 40 credit')
      return
    }
    
    
  }

  // console.log(carts)
  return (
    <>
      <h1 className='text-4xl font-bold text-center p-4 '>Course Registration</h1>

      <div className='grid grid-cols-12 w-[1600px] mt-7 gap-8 mx-auto'>
        <div className='col-span-9'>
          <Courses handlerSelection = {handlerSelection}></Courses>
        </div>
        <div className='col-span-3'>
          <Cart carts={carts} remainingHour={remainingHour} addCredit={addCredit}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
