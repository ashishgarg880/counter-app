import React, { Component } from 'react'
import {TodoItems} from './todoItems'

export const Todos=(props)=> 
{    
    return (
        <div className="container">
            <h3>Hello Todos</h3>
            <p>{props.title}</p>
            {/* {   props.todos} */}
            <TodoItems todos={props.todos[0]}/>
        </div>
    )
}

