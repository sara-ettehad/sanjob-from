import React from 'react';

import { IoCameraOutline } from "react-icons/io5";
import { TbMessageCircleBolt } from "react-icons/tb";

import profileSan from "./../images/profile.jpg";

class Header extends React.Component{
    render(){
        return (
        <section id="header">

            <div className="header__wrapper">
                
                <IoCameraOutline/>
                <img src={profileSan} alt=''/>
                <TbMessageCircleBolt/>

            </div>

        </section>
        );
    }
}

export default Header;