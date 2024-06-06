import React from 'react';

import { IoCameraOutline } from "react-icons/io5";
import { TbMessageCircleBolt } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { GrSave } from "react-icons/gr";



import profileSan from "./../images/profile.jpg";
import logoSan from "./../images/logo.jpg";
import postSanj from "./../images/post.jpg";

class Home extends React.Component{
    render(){
        return (
            <main>
                <section id="header">

                    <div className="header__wrapper">
                    
                        <IoCameraOutline/>
                        <img src={profileSan} alt=''/>
                        <TbMessageCircleBolt/>

                    </div>
                    
                    
                </section>  

                

                <section id='posts'>

                    <div className="postHeader__wrapper">
                    
                        <div className='logo'></div>
                        <BsThreeDotsVertical/>

                    </div>

                    <div className="posts__wrapper">
                    
                        <img src={postSanj} alt=''/>

                    </div>
                    <div className="postsDetail__wrapper">
                    
                        <div className="left__wrapper">
                            <FaRegHeart/>
                            <FaRegComment className="comment-icon" />
                            <LuSend/>
                        </div>
                        
                        <div className="right__wrapper">
                            <GrSave/>
                        </div>

                    </div>

                    <p dir="rtl" align="right">🔘 نیازمندیهای مداد ♦️
                    �
                    صبا شاه‌چراغی، مشاور رسمی مهاجرت
                    تعدادی از اعضای باشگاه مشتریان ما عبارتند از: ▫️صاحبان کسب‌وکار متقاضی توسعه‌ی تجاری به کانادا ▫️کارفرمایان کانادایی متقاضی تأمین نیروی کار از منابع انسانی بین‌المللی ▫️متخصصان جوان متقاضی کار و اقامت دائم کانادا ▫️متقاضیان برنامه‌ی استارت‌آپ ▫️متقاضیان مهاجرت از طریق برنامه‌های استانی کانادا ▫️و بسیاری از مراجعین دیگر از جمله: متقاضیان ویزاهای اقامت موقت، دانشجویی، دانش‌آموزی، دیدار خویشاوندان، اسپانسرشیپ همسر و دیگر اعضای خانواده 🔹 Montreal
                    
                    5147739389
                    442 Rue Saint-Gabriel, Suite 112, Montreal H2Y 2Z9 🔹 Toronto
                    </p>

                    
                    
                </section> 

                <section id="footer">

                    <div className="footer__wrapper">
                    
                        <GrHomeRounded/>
                        <IoSearch/>
                        <FaRegSquarePlus/>
                        <FaRegHeart/>
                        <img src={logoSan} alt=''/>

                    </div>
                    
                    
                </section>  
            </main>
        );
    }
}

export default Home;