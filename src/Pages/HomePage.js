import React, { Fragment } from 'react';
import Banner from "../Componenets/Banner/Banner"
import Table from '../Componenets/Table';
const HomePage=({dispdata})=> {
  console.log({dispdata})
  return(
 <>

<Banner/>
<Table dispdata={dispdata}/>
 </>



  );
};

export default HomePage;
