import { Link, makeStyles } from '@material-ui/core'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';


const useStyles=makeStyles((theme)=>({
carousel:{
    height:"50%",
    display:"flex",
    alignItems:"center"
},
carouselItem:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    cursor:"pointer",
    TextTransform:"uppercase",
    color:"white"
}

}));

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}



function Carousel() {

    const classes=useStyles();
    

const arr=[
{name:"abdulrazak gurnah" ,year: 2021, for:"Literature",imgurl:"https://imgk.timesnownews.com/story/main_Abdulrazak_Gurnah_Mark_Cocksedge.jpg?tr=w-400,h-300,fo-auto"},
{name:"Rabindranath Tagore" ,year:1913,for:"Literature",imgurl:"https://cms.qz.com/wp-content/uploads/2016/10/tagore.jpg?quality=75&strip=all&w=1600&h=900&crop=1"},
{name:"Benjamin List" ,year:2021,for:"Chemistry",imgurl:"https://www.global.hokudai.ac.jp/wp-content/uploads/2021/12/NP21_294_2885-StandardJPEG-scaled.jpg"},
{name:"C. V. Raman",year:1930,for:"Physics",imgurl:"http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR-NeOgWT-VDT2Viww3zzgar2NIpT5VlYfvIhzLmXDnOttzdIHe8ZeUnIJ-Tmbj"},
{name:"Nicholas Murray" ,year:1931,for:"Peace Prize",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/56/Portrait_of_Nicholas_Murray_Butler.jpg"},
{name:"Max Theiler" ,year:1951,for:"Physiology",imgurl:"https://iiif.wellcomecollection.org/image/V0027627/full/full/0/default.jpg"},
{name:"Lev Landau" ,year:1962,for:"Physics",imgurl:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSHmhIKqO47nQLlh5Xlnjc6sh29eKsulQFh6KxwW25vif0Ap12-hj0ckM5U5lsO"},
{name:"Liu Xiaobo" ,year:2010,for:"Peace Prize",imgurl:"https://upload.wikimedia.org/wikipedia/en/a/a3/Liu_Xiaobo.jpg"},
{name: "Takaaki Kajita",year:2015,for:"Physics",imgurl:"https://physicstoday.scitation.org/action/showOpenGraphArticleImage?doi=10.1063/PT.5.031170&id=media/PT.5.031170.jpg"},
{name: "Richard Thaler",year:2017,for:"Economic Science",imgurl:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT_DBdKJUDiLAwmC6xLlRYLgl0VcaP69LvktTjUYFE8fls85jzGUvc8oAN-EGS5"}
];

const items=arr.map((i)=>{




    return (
<Link className={classes.carouselItem} 
to={"/coins"}> 
<img src={i.imgurl}
alt={i.name}
height="80"
width="100"
style={{marginBottom:10}}
/>


<span>{i.name}
&nbsp;{/*means leave some space */}
<br></br>
<span
style={{color:"red",
fontWeight:500,
}}
>{i.for}</span><br></br>

<span style={{fontSize:22,fontWeight:500}}>
    {i.year}

</span>

</span>




</Link>
    );
})


const responsive ={  //if size is >512 pixel then display 4 items else display 2 items
                      
    0:{
        items:2,
    },
    512:{
        items:4,
    }
};
  return (
    <div className={classes.carousel}>
<AliceCarousel

mouseTracking
infinite
autoPlayInterval={1000}
animationDuration={1500}
disableDotsControls
responsive={responsive}
autoPlay
items={items}
disableButtonsControls
/>

 </div>
  )
}

export default Carousel