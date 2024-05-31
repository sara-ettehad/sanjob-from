import React from 'react';

import {FaCamera} from "react-icons/fa";
import {FaInbox} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {CiHeart} from "react-icons/ci";
import {CiMenuKebab} from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";





import logoSan from "./../images/logo.jpg";
import postSanj from "./../images/post.jpg";

class Home extends React.Component{
    render(){
        return (
            <main>
                <section id="header">

                    <div className="header__wrapper">
                    
                        <FaCamera/>
                        <img src={logoSan} alt=''/>
                        <FaInbox/>

                    </div>
                    
                    
                </section>  

                

                <section id='posts'>

                    <div className="postHeader__wrapper">
                    
                        <img src={logoSan} alt=''/>
                        <CiMenuKebab/>

                    </div>

                    <div className="posts__wrapper">
                    
                        <img src={postSanj} alt=''/>

                    </div>
                    <div className="postsDetail__wrapper">
                    
                        <div className="left__wrapper">
                            <CiHeart/>
                            <FaRegComment/>
                            <IoIosSend/>
                        </div>
                        
                        <div className="right__wrapper">
                            <MdSaveAlt/>
                        </div>

                    </div>

                    <p>🔘 نیازمندیهای مداد ♦️
                    �
                    صبا شاه‌چراغی، مشاور رسمی مهاجرت
                    تعدادی از اعضای باشگاه مشتریان ما عبارتند از: ▫️صاحبان کسب‌وکار متقاضی توسعه‌ی تجاری به کانادا ▫️کارفرمایان کانادایی متقاضی تأمین نیروی کار از منابع انسانی بین‌المللی ▫️متخصصان جوان متقاضی کار و اقامت دائم کانادا ▫️متقاضیان برنامه‌ی استارت‌آپ ▫️متقاضیان مهاجرت از طریق برنامه‌های استانی کانادا ▫️و بسیاری از مراجعین دیگر از جمله: متقاضیان ویزاهای اقامت موقت، دانشجویی، دانش‌آموزی، دیدار خویشاوندان، اسپانسرشیپ همسر و دیگر اعضای خانواده 🔹 Montreal
                    
                    5147739389
                    442 Rue Saint-Gabriel, Suite 112, Montreal H2Y 2Z9 🔹 Toronto
                     </p>

                    
                    
                </section> 

                <section id="footer">

                    <div className="footer__wrapper">
                    
                        <FaHome/>
                        <FaSearch/>
                        <FaPlus/>
                        <CiHeart/>
                        <img src={logoSan} alt=''/>

                    </div>
                    
                    
                </section>  
            </main>
        );
    }
}

export default Home;