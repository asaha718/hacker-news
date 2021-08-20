import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, edit, toggleComplete, remove } from "./todoSlice";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch= useDispatch(); 
  const todo = useSelector((state) => state.todo);

  const handleSubmit =(e)=> { 
    e.preventDefault(); 

    dispatch(create(inputVal)); 

    setInputVal(""); 
  }
  
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
        <button type="submit">New Todo</button>
      </form>
    </div>
  );
};

export default Todo;
