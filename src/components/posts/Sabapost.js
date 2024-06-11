import React from 'react';
import {Link} from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { GrSave } from "react-icons/gr";

import postSanj from "../../images/post.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";


class Sabapost extends React.Component{
    render(){
        return (
                <section id='posts'>
        
                    <div className="postHeader__wrapper">
                    
                        <Link to="/BusinessPage"> <div className='logo'></div> </Link>
                    
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
        );
    }
}

export default Sabapost;