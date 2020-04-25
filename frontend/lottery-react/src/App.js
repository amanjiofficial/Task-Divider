import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import project from './project';
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
      cc:'',
      linkC:'',
      memC:'',
      tC:'',
      addrC:'',
      taskCName:'',
      validC:'',
      boolC:0,
      totalTasks:'',
      totalATasks:'',
      tagsb:'',
      tidb:'',
      tnameb:'',
      tidAb:'',
      tnameAb:'',
      pnameAb:'',
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
    this.verifyCerti=this.verifyCerti.bind(this)
    this.fetchNextCertinum=this.fetchNextCertinum.bind(this)
    this.fetchNextCerti=this.fetchNextCerti.bind(this)
    this.fetchTNameCerti=this.fetchTNameCerti.bind(this)
    this.fetchPNameCerti=this.fetchPNameCerti.bind(this)
    this.callVerifyCerti=this.callVerifyCerti.bind(this)
    this.totalTasks=this.totalTasks.bind(this)
    this.totalATasks=this.totalATasks.bind(this)
    this.fetchTask=this.fetchTask.bind(this)
    this.fetchATask=this.fetchATask.bind(this)
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ myAddr:accounts[0] });
    console.log(this.state.myAddr);
  }
  totalTasks=async () => {
    var numu;
    try {
        numu = await project.methods.totalTasks().call();
        this.setState({totalTasks:numu})
    } catch (e) {
       console.error(e);
    }
  }

  totalATasks=async () => {
    var numu;
    try {
        numu = await project.methods.totalAssigned().call();
        this.setState({totalATasks:numu})
    } catch (e) {
       console.error(e);
    }
  }

  callVerifyCerti = async () => {
    try {
       await project.methods.verifycertificate(this.state.boolC).send({from:this.state.myAddr});
       this.setState({taskCName:'',cc:'',linkC:'',memC:'',tC:'',addrC:'',})
      } catch (e) {
       console.error(e);
    }
  }
  verifyCerti(){
    if(this.state.validC==='valid'){
      this.setState({boolC:1})
    }
    else this.setState({boolC:1})
    this.callVerifyCerti()
  }

  fetchTNameCerti=async (event) => {
    var numu;
    try {
        numu = await project.methods.tasks(this.state.tC).call();
        console.log(numu);
        this.setState({taskCName:numu.name})
    } catch (e) {
       console.error(e);
    }
  }
  fetchTask=async () => {
    var numu;
    try {
        numu = await project.methods.tasks(this.state.tidb).call();
        console.log(numu);
        this.setState({tnameb:numu.name,tagsb:numu.tags})
    } catch (e) {
       console.error(e);
    }
  }
  fetchATask=async () => {
    var numu;
    try {
        numu = await project.methods.tempassign(this.state.tidAb).call();
        console.log(numu);
        this.setState({tnameAb:numu.tname,pnameAb:numu.pname})
    } catch (e) {
       console.error(e);
    }
  }
  fetchPNameCerti=async (event) => {
    var numu;
    try {
        numu = await project.methods.g_members(this.state.addrC).call();
        console.log(numu);
        this.setState({memC:numu.name})
    } catch (e) {
       console.error(e);
    }
  }
  fetchNextCerti=async (event) => {
    var numu;
    try {
        numu = await project.methods.certification(this.state.cc).call();
        console.log(numu);
        this.setState({linkC:numu.links,tC:numu.taskid,addrC:numu.gmemaddr,})
        this.fetchPNameCerti();
        this.fetchTNameCerti();
    } catch (e) {
       console.error(e);
    }
  }
  fetchNextCertinum=async (event) => {
    var numu;
    try {
        numu = await project.methods.g_members(this.state.myAddr).call();
        console.log(numu);
        this.setState({cc:numu.toverify})
        this.fetchNextCerti();
    } catch (e) {
       console.error(e);
    }
  }
  handleChange(event){
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
  }
  fetchBal = async (event) => {
    var numu=0;
    try {
        numu = await project.methods.g_members(this.state.myAddr).call();
        console.log(numu);
        this.setState({myBal:numu.bal})
    } catch (e) {
       console.error(e);
    }
  }
  createMem = async (event) => {
    try {
       await project.methods.addmember(this.state.rno,this.state.memname,this.state.myAddr).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  createTask = async (event) => {
    try {
       await project.methods.addtask(this.state.tname,this.state.tag).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  createCerti = async (event) => {
    try {
       await project.methods.addcerti(this.state.link,this.state.tid).send({from:this.state.myAddr});
      } catch (e) {
       console.error(e);
    }
  }
  updatePrefer = async (event) => {
    try {
       await project.methods.addPreference(this.state.prefe).send({from:this.state.myAddr});
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
        var numu = await project.methods.tasks(this.state.cid).call();
        console.log(numu);
        this.setState({ctask:numu.name})
    } catch (e) {
       console.error(e);
    }
  }
  currTask = async () => {
    try {
      var cidd;
       cidd=await project.methods.currtaskid().call();
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
    <div className='App'>
    <div className='newMem'>
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
      </div>
        <br/>
        <br/>
      <div className='currBal'>
      <h4>Your current balance is: {this.state.myBal}</h4>
      <br/>
      <button onClick={this.fetchBal}>Fetch My Current Balance</button>
      </div>
      <br/>
      <br/>
      <div className='addTask'>
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
        </div>
        <br/><br/>
        <div className='addCerti'>
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
        </div>
        <br/>
        <br/>
        <div className="lastTask">
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
        <br/><br/>
        <div className="verifyCerti">
        <h3>Fetch Next Certifications and Experience to verify</h3>
        <button onClick={this.fetchNextCertinum}>Fetch</button>
        <h4>Work Exp/Certification URL: {this.state.linkC} <br/>
            Task: {this.state.taskCName} <br/>
            by Member :{this.state.memC}</h4>

            Valid
             <input
               name="validC"
               type="radio"
               value ="valid"
               checked={this.state.validC === "valid"}
               onChange={this.handleChange}
             />
            <br/>
            Invalid
             <input
               name="validC"
               type="radio"
               value ="invalid"
               checked={this.state.validC === "invalid"}
               onChange={this.handleChange}
             />
        <br/>
        <button onClick={this.verifyCerti}>Submit</button>
        </div>
        <br/>
        <br/>
        <div className="displTask">
        <h3>Display Tasks</h3>
        <button onClick={this.totalTasks}>Submit</button>
        <h3>Total Tasks={this.state.totalTasks}</h3>
        <h2>See Particular Task</h2>
        <input
          name="tidb"
          type="text"
          value ={this.state.tidb}
          placeholder="Task Number"
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.fetchTask}>Fetch Task</button>
        <h2>Task: {this.state.tnameb}<br/> Tags: {this.state.tagsb}</h2>

        </div>
        <br/><br/>
        <div className="displATask">
        <h3>Display Assigned Tasks</h3>
        <button onClick={this.totalATasks}>Submit</button>
        <h3>Total Assigned Tasks={this.state.totalATasks}</h3>

        <h2>See Particular Assigned Task</h2>
        <input
          name="tidAb"
          type="text"
          value ={this.state.tidAb}
          placeholder="Assigned Task Number"
          onChange={this.handleChange}
          />
          <br/>
        <button onClick={this.fetchATask}>Fetch Assigned Task</button>
        <h2>Task: {this.state.tnameAb}<br/> Assigned To: {this.state.pnameAb}</h2>
        </div>
    </div>
       );
  }
}

export default App;
