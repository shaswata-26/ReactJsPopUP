import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal,setShowModal]=useState(false)
  return (
    <div
      className="h-screen flex flex-col items-center gap-6 bg-[#14161b] justify-center"
    
    >
      <h1 className='text-5xl font-bold mt-4'>Pop Up Model</h1>
      <button className='bg-violet-500 px-4 py-2 rounded-lg text-lg' onClick={()=>setShowModal(true)} >Click Here</button>
      {showModal && <Modal onClose={()=>setShowModal(false)}/>}
    </div>
  );
}

export default App;
