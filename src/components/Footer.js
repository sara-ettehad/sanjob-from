import React from 'react';
import {Link} from "react-router-dom";

import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

class Footer extends React.Component{
    render(){
        return (
            <section id="footer">

            <div className="footer__wrapper">
            
                <GrHomeRounded/>
                <IoSearch/>
                <FaRegSquarePlus/>
                <FaRegHeart/>
                <Link to="/BusinessPage"> <div className='logo'></div> </Link>
            </div>
            
            
        </section>  
        );
    }
}

export default Footer;