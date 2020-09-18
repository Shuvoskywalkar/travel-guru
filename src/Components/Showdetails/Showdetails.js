import React from 'react';
import { useParams } from 'react-router-dom';
import Bookingform from '../BokkingForm/Bookingform';
import fakedata from '../BookNow/Fakedata'
import Details from '../Details/Details'
import Header from '../Header/Header';
const Showdetails = () => {
    const {proKey}=useParams()
    console.log(proKey)
    const product=fakedata.find(pd=>pd.key==proKey)
    console.log(product)
    // const ishtyle={{}}
    return (<div className="Home" style={{backgroundImage:"/my-app/src/Image/Rectangle 1.png"},{backgroundPosition:'fixed'},{backgroundSize:"100%"}}>
        <Header></Header>
        <div className="p-5 mx-5 showdetails">
            
         <Details Product={product}></Details>
         
   
             </div>
             </div>
    );
};

export default Showdetails;