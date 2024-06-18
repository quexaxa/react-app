import './company.css'

import domostoi from './../../img/brands/domostroi.png';
import sber from './../../img/brands/sber.png';
import socStrah from './../../img/brands/soc-strah.png';
import standartkgn from './../../img/brands/standartkgn.png';
import vtb from './../../img/brands/vtb.png';

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brands_list">
                    <li><a href="#!"><img src={domostoi} alt="dom" /></a></li>
                    <li><a href="#!"><img src={sber} alt="!" /></a></li>
                    <li><a href="#!"><img src={socStrah} alt="!" /></a></li>
                    <li><a href="#!"><img src={standartkgn} alt="!" /></a></li>
                    <li><a href="#!"><img src={vtb} alt="!" /></a></li>
                </ul>
            </div>
        </section>
    );
}
 
export default Brands;