import React, { Component } from 'react';

class App extends Component 
{

	constructor(props){
	super(props);

	this.state = 
	{
	username : '',
	validationMessage:'',
	names:[]
    }

	this.updateInput = this.updateInput.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
}


	updateInput(event)
	{
	this.setState({username : event.target.value})
	}

	handleDeleteInput(arrayValue)
	{


	
	if (arrayValue > -1) {
		this.state.names.splice(arrayValue, 1);

		var getList = this.state.names;
		this.setState({ names: getList })

	}
	

	//return true;
	}


	handleSubmit()
	{

	
	
	if(this.state.username.trim().length !== 10){

	this.setState({validationMessage : "length should be equal to 10"})
	
	}
	else if(this.state.username.trim().substring(3,0) !== 'CAV'){

	
	this.setState({validationMessage : "First 3 code should be CAV"})
	

	}else{

	
	this.setState({validationMessage : ""})

	
	this.setState({ names: [...this.state.names, this.state.username] })

	

	}

	
	}



	render(){
	return (
		<center>
		<div>
		<input type="text" onChange={this.updateInput}></input>
		<input type="submit" value="Add" onClick={this.handleSubmit} ></input>
	<p style = {{color: "red"}} id = "error">{this.state.validationMessage}</p>
		</div>
		<br/><br/><br/>

		<label><h1>Saved CAV Number : </h1></label>

		

		<table className="fixed_header" border = "1" cellSpacing = "0" cellPadding = "0"> 
		
				{this.state.names.map((item,index) => {
				return <tr><td>{item}</td> <td><input type="button" value="Remove" className="mr10" onClick={()=>this.handleDeleteInput(index)}></input></td></tr>;
				})}

		
		</table>


		</center>
	);
	}
	} 
export default App;