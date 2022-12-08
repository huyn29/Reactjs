import './App.css';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import Get_pass from './page/Login/Get_pass/Get_pass';
import Home from './page/Home/Home';
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
            <Route path='/' exact>
              <Register/>
            </Route>
            <Route path='/Login'>
              <Login/>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/Get-pass'>
              <Get_pass/>
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
