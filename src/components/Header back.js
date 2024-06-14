import React from 'react';
import {Link} from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { TbMessageCircleBolt } from "react-icons/tb";

import profileSan from "./../images/profile.jpg";

class HeaderBack extends React.Component{
    render(){
        return (
        <section id="header">

            <div className="header__wrapper">
                
                <Link to="/"><IoIosArrowBack/></Link>
                <img src={profileSan} alt=''/>
                <TbMessageCircleBolt/>

            </div>

        </section>
        );
    }
}

export default HeaderBack;