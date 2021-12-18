import React, { Component } from 'react'
import {TodoItems} from './todoItems'

export const Todos=(props)=> 
{    
    return (
        <div className="container">
            <h3 className='my-3'>Hello Todos</h3>
            {props.todos.length===0?"No item found:":
                props.todos.map((todos)=>{
                return <TodoItems todos={todos} key={todos.id} onDelete={props.onDelete}/>
                })
            }
            <h3>Hlel </h3>
        </div>
    )
}

