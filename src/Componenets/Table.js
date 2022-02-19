
import { Checkbox } from '@material-ui/core';
import axios from 'axios';
import MaterialTable from 'material-table';
import { useEffect, useState } from 'react';


function Table(props) {
  const [filter,setfilter]=useState(true)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const columns=[
{title:"Year",field:"year"},
{title:"Category",field:"category"},
{title:"Name",field:"Name"},
{title:"Motivation",field:"motivation"},


]
const handleChange=()=>{
  setfilter(!filter);
}
  return (
 
  <div>
     <Checkbox {...label} checked={filter} onChange={handleChange}/>
<MaterialTable
title="Noble Price Winner"
data={props.dispdata}
columns={columns}
options={{
  filtering:filter
}}
/>
  </div>
  );
}

export default Table;
