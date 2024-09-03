import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


export default function NewProject({onAdd, onCancel}) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){

    const enteredTitled = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitled.trim() === '' || enteredDescription.trim() ==='' || enteredDueDate.trim() === ''){
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredTitled,
      description:enteredDescription,
      dueDate:enteredDueDate
    })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className='my-4 text-xl font-bold text-stone-500 '>Invalid input</h2>
      <p className='text-stone-400 mb-4'>Please enter all fields</p>
      
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gao-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel} >cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-900 text-stone-200 hover:bg-orange-600 hover:text-amber-100" onClick={handleSave}>Save</button>
        </li>
      </menu>
      <div></div>
      <Input type="text" ref={title} label="Title" />
      <Input type="text" ref={description} label="Description" textarea />
      <Input type="date" ref={dueDate} label="Due Date" />
    </div>
    </>
  );
}
