import React from 'react';
import { Link } from 'react-router-dom';

const Bookingform = (props) => {
   
    return (
         <div >
            <div className="form">
                <b>Origin:</b>
                <input type="text" value={'Bangladesh'} />
                <br/>
                <b>Destination:</b>
                <input type="text" value={props.Dest}/>
                <br/>
                <br/>
     <Link to="/login">
         <button className="btn btn-warning pr-5 pl-5 text-light">Start Booking</button>
     </Link>
      
             </div>
        </div>
    );
};

export default Bookingform;