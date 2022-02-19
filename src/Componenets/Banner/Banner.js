import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles=makeStyles(()=>({
    banner:{
        backgroundImage:"url(./FinalNobleprice.jpg)",
        
    },

bannerContent:{
    height:672,
    display:"flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",

},
tagline:{
    display:"flex",
    height:"40%",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
},

}));

function Banner() {
    const classes=useStyles();
  return (
    <div className={classes.banner}>
        
       <Container className={classes.bannerContent}> 
       <div className={classes.tagline}>
<Typography
variant='h4'
style={{
    fontWeight:"bold",
    marginBottom:15,
    fontFamily:"Montserrat",
}}>

Noble Price Winners 
</Typography>

<Typography variant='subtitle2'

style={
    {
        color:"darkgrey",
        textTransform:"capitalize",
        fontFamily:"Montserrat",
    }
}

>
Get all the Info regarding your favorite Noble Price Winner
</Typography>


       </div>
       <Carousel/>
       </Container>
        
        </div>
  )
}

export default Banner;