import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dashboardLogo from './assets/dashboard logo.webp'
import InputBar from './components/InputBar';

const project_name = 'Finance Dashboard'

function Header() {
  return (
    <>
    <header>
      <h1><b>{project_name}</b></h1>
      <p>calculating your stock...</p>
    </header>
  </>
  )
}
function App() {

  return (
    <>
      <div>
        <img src={dashboardLogo} className="logo" alt="dashboard logo" />
        <Header />
        <main>
        <div className="input-container">
        < InputBar />  
        < InputBar />  
        < InputBar />  
          <button
          style={{
            padding: '30px 30px',
            marginTop: '100px',
            borderRadius: '7px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer'}}>
          Add Stock
          </button>
        </div>
        <h1>Stock List</h1>
        <p>No stock...</p>
        </main>
      </div>
      
    </>
  )
}

export default App
