import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import Formadd from './components/formadd';
import Formtask from './components/formtask';
import Formcerti from './components/formcerti';
import Header from './components/header';
import {Container,Row,Col,Button} from 'reactstrap'; 
class App extends Component
{
  constructor(props){
    super(props)
    this.state = {
      show : false,
      show1:false, 
      show2:false
    };
    this.togglemember = this.togglemember.bind(this)
    this.toggletask = this.toggletask.bind(this)
    this.togglecerti=this.togglecerti.bind(this)
  }
  togglemember = () =>
  {
    const {show} = this.state;
    this.setState({show: !show})
  }
  toggletask = () =>
  {
    const {show1} = this.state;
    this.setState({show1: !show1})
  }
  togglecerti = () =>
  {
    const {show2} = this.state;
    this.setState({show2: !show2})
  }
  render()
  {
    return(
      <Container>
      <Header />
        <div class="container">
          <div class="row">
            <div class="col">
          <Button onClick={this.togglemember}>Add New Member</Button>
        {this.state.show && <Form1/>}
        </div>
        <br />
        <br />
        <div class="col">
        <Button onClick={this.toggletask}>Add New Task</Button>
        {this.state.show1 && <Form2/>}
        </div>
        <br />
        <br />
        <div class="col">
        <Button onClick={this.togglecerti}>Add certification</Button>
        {this.state.show2 && <Form3/>}
        </div>
        </div>
        </div>
        </Container>
       );
  }
}
class Form1 extends Component{
  render(){
    return(
      <div>
      <Formadd />
      </div>
    );
  }
}
class Form2 extends Component{
  render(){
    return(
      <div>
        <Formtask />
      </div>
    );
  }
}

class Form3 extends Component{
  render(){
    return(
      <div>
        <Formcerti />
      </div>
    )
  }
}
export default App;

// class App extends Component {	
//   state = {
// 	  manager: ''
//   };


//   async componentDidMount() {
// 	  const manager = await lottery.methods.manager().call();
	  
// 	  this.setState({ manager });
//   }
//   render() {
//   return (
// 	  <div>
// 	  <h2>Lottery Contract</h2>
// 	  <p>This contract is managed by {this.state.manager}</p>
// 	</div>
//   );
	  
//   }
// }

// export default App;
