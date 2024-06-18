import './banner.css';
import promoImg from './../../img/images/header-img.png';
import { NavLink } from 'react-router-dom';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo_content">
                    <div className="promo_text">
                        <div className="promo_title">
                            <span className='highlight'>
                                <span>Рекламное</span>
                            </span>
                            <h3>агентство</h3>  
                            <span className='highlight highlight--yellow'>
                                <span>наружной</span>
                            </span>
                            <h3>рекламы</h3>
                          
                        </div>
                        <div className="promo_description">
                            <h3>Выбери и закажи услугу прямо сейчас!</h3>
                        </div>
                        <NavLink className="promo_btn-wrapper" to = '/service'>
                            <a href="#!" className='promo_btn'>Показать услуги</a>
                        </NavLink>
                    </div>
                    <div className="promo_images">
                        <img src={promoImg} alt="promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
