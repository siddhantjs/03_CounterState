import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [conuterSet, setCounterSet] = useState(0)
  return (
    <div className='bg-white/20 shadow-lg shadow-gray-500 rounded-2xl w-xs h-1/3 flex flex-col p-2'>

        <h1 className='text-center text-gray-200'>Counter {counter}</h1>

        <div className='w-full gap-2 p-2 flex flex-col justify-between'>

            <div className='w-full flex justify-around p-1'>
                <button 
                onClick={()=>setCounter(prev=>prev+1)}
                className='p-2 text-gray-400 bg-gray-800 rounded-lg'>
                Increase
            </button>

            <button 
                onClick={()=>setCounter(prev=>prev>0?prev-1:0)}
                className='p-2 text-gray-400 bg-gray-800 rounded-lg'>
                Decrease
            </button>

            <button
                onClick={()=>setCounter(prev=>0)}
                className='p-2 text-gray-400 bg-gray-800 rounded-lg'>
                Reset
            </button>

            </div>
           
            <div className='p-2 flex gap-2'>
                <input 
                className='p-2 w-full bg-gray-500 rounded' 
                type="text" 
                value={conuterSet}
                onChange={(e)=>setCounterSet(Number(e.target.value))}
            />
            
            <button
                onClick={()=>{
                    setCounter(conuterSet);
                    setCounterSet(0)
                }}
                className='p-2 text-gray-400 bg-gray-800 rounded-lg'>
                Set to {conuterSet}
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default Counter