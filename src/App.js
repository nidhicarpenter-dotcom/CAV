import React,{useState} from 'react';
import './App.css';


function App()
{

	const [inputList, setInputList]=useState([
		{firstName:""}
		
	]);

	

	const handleChange =(e,index) =>
	{
	   const {name,value} =e.target;

        if(value.substring(3,0) !== "CAV"){
			
        console.log('this is the error here');
		}

		if(value.length !== 10 ){
        console.log('the char length should not be less than or greater than 10');
	}
	  
	  const list=[...inputList];
	  list[index][name]=value;
	  setInputList(list);
	}

	const handleAddInput=()=>{
		
		const list=[...inputList];

		list.push({firstName:""});
		setInputList(list);
		
	}
	

	const handleDeleteInput=(index)=>{
		const list=[...inputList];
		list.splice(index,1);
		setInputList(list);
	}
	
	
	
	return(
	   
       <div className="App">
		   {inputList.map((item,i)=>{
			return  (
			   <div key={i} className="box">
				<label>CAV Number </label>
				<input 
					type="text" 
					name="firstName" 
					placeholder="CAV Number" 
					className="mr10" 
					value={item.firstName}
					onChange={e=>handleChange(e,i)}>
                </input>
				

				{inputList.length-1===i &&
				<button
					 type="button" 
					 value="Add" 
					 className="mr9"
					 onClick={handleAddInput}>
                Add</button>}
		   </div>
		  
		   
		 
			)
		   })}
		    
			
             <label><h1>Saved CAV Number : </h1></label>
		   
			   <table className="fixed_header">
				{inputList.map((item, i) => (
					<tr key={i}>
						<td className="cavhead">{item.firstName}</td>
						<td className="cavhead">
							{inputList.length !==1  &&
							<button
								type="button" 
								value="Remove" 
								className="mr10"
								onClick={()=>handleDeleteInput(i)}>
							Remove</button>}
						</td>
				    </tr>
				))}
				</table>
			
		</div>
	   
	)
}

export default App;