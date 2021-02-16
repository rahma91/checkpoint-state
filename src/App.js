import './App.css';
import React from 'react'
import Profile from './components/profile';
import { Button } from "react-bootstrap";


class App extends React.Component {
      state = {
        show : false ,
    }
    handlClichShow=() => {
      this.setState({
        show: true
      })
    }

                   
  render(){
      return (
    <div className="App">

         <>

       <Button variant="success" onClick={this.handlClichShow}>Profile</Button>
 
        </> 
        
        {/* <profile /> */}

       {this.state.show ? <Profile />  : null}     
      
    </div>
   );
  }
  
}

export default App;
