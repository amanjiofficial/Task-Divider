import React, { Component } from 'react';
import './App.css';
import lottery from './lottery';
import web3 from './web3';
class App1 extends Component
{
    constructor(props){
        super(props)
        this.state = {
          num:1,
          acc:''
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmit1 = this.onSubmit1.bind(this)
      }
    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        this.setState({ acc:accounts[0] });
    }
    onSubmit = async (event) => {
        try {
            var x=7;
           await lottery.methods.addx(x).send({from:this.state.acc});
           console.log("ok")
           
        } catch (e) {
           console.error(e);
           console.log("not ok")
        }
    }
      onSubmit1 = async (event) => {
        var numu=0;
        try {
            numu = await lottery.methods.numx().call();
            console.log(numu);
            this.setState({num:numu})
        } catch (e) {
           console.error(e);
           console.log("numuuu");
        }
    }
    render(){
        
        return(
        <div>
        <button onClick={this.onSubmit}>Update num in contract</button>
        <br/><br/>
        <button onClick={this.onSubmit1}>Update num in JS</button>
        <h1>{this.state.num}</h1>
        </div>
        )
    }
}
export default App1;

