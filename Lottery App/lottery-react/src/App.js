import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
class App extends Component
{
  constructor(props){
    super(props)
    this.state = {
      myAddr:'',
      myBal:0,
      memname:'',
      rno:'',
      tname:'',
      tag:'',
      link:'',
      tid:'',
      prefe:0,
      ctask:'',
      cid:0,
    };
    
    this.fetchBal=this.fetchBal.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.updatePrefer=this.updatePrefer.bind(this)
    this.createMem=this.createMem.bind(this)
    this.createTask=this.createTask.bind(this)
    this.createCerti=this.createCerti.bind(this)
    this.currTask=this.currTask.bind(this)
    this.currTaskName=this.currTaskName.bind(this)
    this.checkPrefer=this.checkPrefer.bind(this)
  }
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ myAddr:accounts[0] });
    console.log(this.state.myAddr);
  }
  handleChange(event){
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
  }
  
  fetchBal = async (event) => {
    var numu=0;
    try {
        numu = await lottery.methods.g_members(this.state.myAddr).call();
        console.log(numu);
        this.setState({myBal:numu.bal})
    } catch (e) {
       console.error(e);
    }
  }

  createMem = async (event) => {
    try {
       await lottery.methods.addmember(this.state.rno,this.state.memname,this.state.myAddr).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  createTask = async (event) => {
    try {
       await lottery.methods.addtask(this.state.tname,this.state.tag).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  createCerti = async (event) => {
    try {
       await lottery.methods.addcerti(this.state.link,this.state.certi).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  updatePrefer = async (event) => {
    try {
       await lottery.methods.addPreference(this.state.prefe).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  checkPrefer = ()=>{
    if(this.state.prefe<=this.state.bal){
      this.updatePrefer();
    }
  }
  currTaskName = async (event) => {
    try {
        var numu = await lottery.methods.tasks(this.state.cid).call();
        console.log(numu);
        this.setState({ctask:numu.name})
    } catch (e) {
       console.error(e);
    }
  }
  currTask = async () => {
    try {
      var cidd;
       cidd=await lottery.methods.currtaskid().call();
       console.log(cidd);
       this.setState({cid:cidd})
       this.currTaskName();
      } catch (e) {
       console.error(e);
    }
  }
  render()
  {
    return(
    <div>
      <h3>Create New Member</h3>
        <input
          name="memname"
          type="text"
          value ={this.state.memname}
          placeholder="Your Name"
          onChange={this.handleChange}
          />
          <br/>
        <input
          name="rno"
          type="text"
          value ={this.state.rno}
          placeholder="Your Roll No."
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.createMem}>Create Member</button>  
      
      <h4>Your current balance is: {this.state.myBal}</h4>
      <button onClick={this.fetchBal}>Fetch My Current Balance</button>

      <h3>Create New Task</h3>
        <input
          name="tname"
          type="text"
          value ={this.state.tname}
          placeholder="Task Name"
          onChange={this.handleChange}
          />
          <br/>
        <input
          name="tag"
          type="text"
          value ={this.state.tag}
          placeholder="Task Tags"
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.createTask}>Create Task</button>  

        <h3>Add Certifications/ Work Experiences</h3>
        <input
          name="link"
          type="text"
          value ={this.state.link}
          placeholder="Certification/Experience URL"
          onChange={this.handleChange}
          />
          <br/>
        <input
          name="tid"
          type="text"
          value ={this.state.tid}
          placeholder="Task Number"
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.createCerti}>Add</button>
        <br/>
        <br/>
        <button onClick={this.currTask}>Update Current Task</button>
        <h3>Add Preference for Current task = {this.state.ctask}</h3>
        <h6>It should be less than or equal to your Current Balance</h6>
        <input
          name="prefe"
          type="text"
          value ={this.state.prefe}
          placeholder="Preference"
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.updatePrefer}>Submit Preference</button>
    </div>
       );
  }
}

export default App;

