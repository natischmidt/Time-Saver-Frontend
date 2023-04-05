import {useEffect,useState} from 'react'

import './App.css'

function App(this: any) {
  const [time, setTime] = useState(0)
    useEffect(()=> {
        addTime();
    }, []);

   // Adding one second to the prior number 1000 ms
    function addTime(){
     setInterval(() => {
            setTime( (prior) => prior + 0.5);
        }, 1000);
    }

    return (
    <div className="Stopwatch">
      <div>
          <h1 className='timer'> {time}</h1>
       <button className='start-button'
       >Start</button>
          <button className='stop-button'> Stop</button>
      </div>
    </div>
  )
}

export default App
