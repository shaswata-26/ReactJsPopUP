import React, { useRef } from "react";
import { X , Download} from "lucide-react";

function Modal({onClose}) {
    const modalRef=useRef();
    const closeModal=(e)=>{
        if(modalRef.current===e.target){
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" >
      <div>
       
        <button className="float-right " onClick={onClose}> <X /></button>
        <div className="bg-stone-700 p-10 w-full">
            <h1>
                web development course

            </h1>
            <p>hiii</p>
            <form className="flex flex-col gap-4">
                <input type="email"  required placeholder="enter your email id " className="p-4"/>
                <button className="flex gap-4">< Download/>Download e book</button>
            </form>
           
        </div>
      </div>
    </div>
  );
}

export default Modal;
