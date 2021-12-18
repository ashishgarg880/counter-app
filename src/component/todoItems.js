import React, { Component } from 'react'

export const TodoItems=({todos, onDelete})=>{
    return (
        <div>
            <h5>{todos.name}</h5>
            <p>{todos.desc}</p> 
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
        </div>
    )
}


