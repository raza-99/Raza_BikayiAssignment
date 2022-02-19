import {  makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Componenets/Header';
import HomePage from './Pages/HomePage';
function App() {
const useStyles=makeStyles(()=>({
  App:{
backgroundColor:"#14161a",
color:"white",
minHeight:"100vh"
  
},}));
const classes=useStyles()
const[change,setchange]=useState(true);
const[info,setinfo]=useState([]);
const[dispdata,setdispdata]=useState([]);
function selectdata(e){
  if(e=="All"){
    setchange(!change);
  }
var sel = dispdata.filter(function(el) {
  return el.year === e;
});
console.log({sel});
}


  //const[laureates,setlaureates]=useState([{}])
  
useEffect(()=>{

  const fetchdata=async()=>{
    
    const response=await axios.get("http://api.nobelprize.org/v1/prize.json");
  
  
  setinfo(response.data.prizes);
  
  const mydata=[

  ]
  response.data.prizes.forEach((v)=>{
  
    v.laureates?.forEach((v1)=>{
      mydata.push({year:`${v.year}`,category:`${v.category}`,Name:`${v1.firstname} ${v1.surname}`,motivation:`${v1.motivation}`});
     
    })
  })
 

  
setdispdata(mydata);


}


  fetchdata();
  
  
},[change])








  return (
    <BrowserRouter>
<div className={classes.App}>
  <Header selectdata={selectdata} />
  <Routes>
  <Route path='/' element={<HomePage dispdata={dispdata} />} />

  </Routes>
 
  
</div>


    </BrowserRouter>
 
    
  );
}

export default App;
