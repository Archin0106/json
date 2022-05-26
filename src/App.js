
import './App.css';
import React,{useState} from 'react';
import axios from "axios";
import Select from 'react-select'


var count=0;
var opt=[];
function App() {
 const[data,setData]=useState([{}]);
const[vals,setvals]=useState([{}]);
 function fetchData(){
  axios.get(" http://localhost:8000/todos").then(res=>{
    // console.log(res.data[1].title);
     for(let i=0;i<res.data.length;i++){
       setData(oldArray => [...oldArray, res.data[i]]);

     }
     
  });
  count++;
 }


 
  return (
    <div>
      {(count===0)?<button onClick={fetchData}>Fetch todos</button>:<div>Data Fetched</div>}
      {console.log(data) }
    <Select options={data}/>
    {/* <Select options={data} /> */}
    </div>
  );
}

export default App;
