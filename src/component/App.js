import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Header from './Header';
import {Todos} from './todo';
import Footer from './footer';
//import Header from './component/Header';

function App() {
    let todos=[{
          id:1,name:"ashish",desc:"host"
        },
        {
          id:2,name:"sahara",desc:"twitter"
        },
        {
          id:3,name:"shukrana",desc:"namste"
        }]
    return(
      <>
        <Header />
        <Todos  todos={todos} title="Hello sahara"/>
        <Footer />
        </>
);
}

export default App;
