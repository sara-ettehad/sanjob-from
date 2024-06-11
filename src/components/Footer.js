import React from 'react';

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
                <div className='logo'></div>

            </div>
            
            
        </section>  
        );
    }
}

export default Footer;