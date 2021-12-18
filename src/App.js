import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import {Todos} from './component/todo';
import Footer from './component/footer';
import React,{useState} from 'react'; 
function App() {
  const onDelete= (todoss)=>{
    console.log("Delete Button",todoss);
    // let index = todos.indexOf(todoss);
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todoss
    }))
  }
  const [todos,setTodos]=useState(
    [{
      id:1,name:"ashish",desc:"host"
    },
    {
      id:2,name:"sahara",desc:"twitter"
    },
    {
      id:3,name:"shukrana",desc:"namste"
    }])

  return (      
    <div className="App">
        {/* <div className='col-md-12'>
          <Header />
        </div> */}
        <div className='col-md-4'>
          <Todos todos={todos} onDelete={onDelete}/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
