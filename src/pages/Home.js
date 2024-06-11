import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer.js';
import Sabapost from '../components/posts/Sabapost.js';



class Home extends React.Component{
    render(){
        return (
            <div>
                <Header/>

                <Sabapost/> 

                <Footer/>

            </div>
        );
    }
}

export default Home;