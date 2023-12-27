import React, { useRef, useState } from 'react';

const MakeTodo = () => {
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState('');
    const inputchange = (e) => {setInputTodo(e.target.value);}
    const inputRef = useRef(null); //inputRef.current.focus() sayfa yüklendiğinde sadece bir kere çalıştırılır.
    
    inputRef.current && inputRef.current.focus();

    const submitHandle = (e) => {
        e.preventDefault(); //formun sayfa yenileme davranışını engelledi

        setTodos([...todos, inputTodo]);
        setInputTodo('');
        inputRef.current.focus();
    }

    const buttonStyle = {color: inputTodo ? 'green' : '',}

    return (
    <div>
        <h2>1. Todo</h2>
        <form onSubmit={submitHandle}>
            <input
                onChange={inputchange}
                value={inputTodo}
                type='text'
                ref={inputRef}
                placeholder='write something' />
            <button
                // onClick={buttonClick}
                disabled={!inputTodo}
                style={buttonStyle}
                type='submit'>
                Add
            </button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                </li>
            ))}
        </ul>
    </div>
    );
};

export default MakeTodo;