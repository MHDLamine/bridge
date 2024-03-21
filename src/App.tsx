import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:"#252323"}}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>POWER BI</h1>
      <div style={{width:"100%",height:"auto"}} >

      <iframe title="insert-BoulelSante" style={{width:"100%"}} height="500"
      src="https://app.powerbi.com/view?r=eyJrIjoiYWM5YzExNWYtODExNi00MGMzLWExZDQtNjVmNDY0MjA1NjhhIiwidCI6ImJmZTY0YzY0LWIwY2UtNDJiZC04MDlhLWE4ODlhMjJhZGQwOSJ9" 
      frameborder="0" allowFullScreen="true"></iframe>
      </div>
     
     
    </div>
  )
}

export default App
