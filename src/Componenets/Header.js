import { AppBar, Container,  makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles=makeStyles(()=>({
title:{
  flex:1,
  color:"gold",
  fontFamily:"Montserrat",
  fontWeight:"bold",
  cursor:"pointer",
}
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100
    }
  }
};

function Header({selectdata}) {
  const navigate = useNavigate();
const yearList=[];
for(var i=1900;i<=2018;i++){
  yearList.push(i);
  
    }
  
    const[date,setdate]=useState("All");
const classes=useStyles();//this is material UI check ur imports for clarity
const darkTheme=createMuiTheme({
palette:{
  primary:{
main:"#fff",
  },
  type:"dark",
},
});

  return (
  <ThemeProvider theme={darkTheme}>
  <AppBar color='transparent' position='static'>
<Container>
  <Toolbar>
    <Typography 
    onClick={()=>{console.log("Clicked");return navigate('/')}}
    className={classes.title}
    >
     Noble Price Winners
      </Typography>
      <Select variant='outlined' style={{width:100,height:40,marginLeft:15}}
      value={date} onChange={(e)=>setdate(e.target.value)}
      
      
      MenuProps={MenuProps} >

<MenuItem value={"All"}><em>All</em></MenuItem>
        {yearList.map((e)=>{return <MenuItem value={e} onChange={(e)=>selectdata(e.target.value)}>{e}</MenuItem>})}
     
      </Select>
  
  </Toolbar>
</Container>
  </AppBar> 
  </ThemeProvider>
  );
}

export default Header;
