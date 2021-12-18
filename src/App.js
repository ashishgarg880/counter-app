import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import {Todos} from './component/todo';
import Footer from './component/footer';
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

  return (      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='col-md-4'><Header /></div>
        <Todos  todos={todos} title="Hello sahara"/>
        <Footer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
