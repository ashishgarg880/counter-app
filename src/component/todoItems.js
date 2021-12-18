import React, { Component } from 'react'
import '';
export const TodoItems=({todos})=>{
    return (
        <div>
            <h3>Hello TodoItems</h3>
            <h1>{todos.id}</h1>
            <h3>{todos.name}</h3>
            <p>{todos.desc}</p> 
            <button className='btn btn-dannger'>click me</button>
        </div>
    )
}


