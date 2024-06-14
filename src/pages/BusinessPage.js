import React from 'react';

import HeaderBack from '../components/Header back.js';
import Footer from '../components/Footer.js';

import { FaLink } from "react-icons/fa";

import postSanj from "../images/post.jpg";

class BusinessPage extends React.Component{
    render(){
        return (
            <div>
                <HeaderBack/>

                <div className='profileHeader'>

                    <div className='profileLogo logo'></div> 

                    <div className='profileDetail'>

                        <div className='profileDetailTop'>
                            <h1>Sanjob</h1>
                            <button>Following</button>
                            <button>Message</button>
                        </div>

                        <div className='profileDetailMidle'>
                            <p> <span>22</span> Post</p>
                            <p> <span>22</span> Followers</p>
                            <p> <span>22</span> Following</p>
                        </div>

                        <div className='profileDetailBottom'>
                            <p>
                                Sanjob.ca
                                <br/>Product/service
                                <br/>Businesses Intelligence Developers <span>@bidar.ca</span>
                                <br/><span><FaLink/>bidar.ca/fa</span>
                            </p>
                        </div>


                    </div>

                </div>

                <div className='profileGrid'>
                <img src={postSanj} alt=''/>
                <img src={postSanj} alt=''/>
                <img src={postSanj} alt=''/>
                <img src={postSanj} alt=''/>

                </div>

                <Footer/>
            </div>
        );
    }
}

export default BusinessPage;