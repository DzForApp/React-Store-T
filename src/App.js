import React, { Component } from 'react'; 
import './App.css';
import Navbar from './components/NavBar/Navbar'; 
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; 
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Reports from './components/Pages/Reports';

class App extends Component{
  state ={
    sideDrawerOpen :false
  };

  darwerToggleClickHandler = () =>{
    this.setState =((prevStat)=>{
      return{sideDrawerOpen : !prevStat.sideDrawerOpen}
    });
  };

  render(){
  
    
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/reports' component={Reports}/>
              <Route  path='/products' component={Products}/>
              
      
            </Switch>
      </BrowserRouter>
        
    </div>
  );
  }
}

export default App;
