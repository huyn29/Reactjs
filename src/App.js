import './App.scss';
// import Huyn from './components/Mycomponent';
// import Huyform from './components/form';
import Father from './components/farcomponent';
import ListTodo from './ToDoApp/ListTodo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './ToDoApp/Home';
import { BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Todo">
            <ListTodo />
          </Route>
          <Route path="/About">
            <Father/>
          </Route>
        </Switch>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      {/* Same as */}
      <ToastContainer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
