import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class BusinessPage extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                
                <div className='logo'></div> 
                
                <Footer/>
            </div>
        );
    }
}

export default BusinessPage;