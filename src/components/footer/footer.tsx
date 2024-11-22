import './footer.scss';
import ImageLogo from '../../assets/Logo.png';
import InfoRow from './infoRow';
import inst from '../../assets/inst.png';
import YT from '../../assets/YT.png';
import twiter from '../../assets/twit.png';

export default function Footer () {
    return (
        <div className="footer">
            <div className='footer_nav'>
                <div className="about_wrapper">
                    <img src={ImageLogo} alt="ImageLogo" />
                    <p>Takeaway & Delivery template for small - medium businesses.</p>
                </div>

                <div className="footer_columns">
                    <InfoRow />
                </div>  
            </div>




            <div className="SNS">
                <p>Built by <span style={{color: "#35B8BE" }}>Flowbase</span>· Powered by <span style={{color: "#35B8BE" }}>Webflow</span></p>

                <div>
                    <img src={inst} alt="inst" />
                    <img src={twiter} alt="twiter" />
                    <img src={YT} alt="YT" />
                </div>
            </div>
        </div>
    )
}