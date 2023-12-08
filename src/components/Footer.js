import './Footer.css';
import logo from '../Images/Logo.webp'
function Footer() {
    return (
        <>
            <div id="Footer">
                <div id="Footer-one">
                    <div id='Footer-one-left'>
                        <img src={logo} alt="img" height="45px" />
                        <p>ManageWise</p>
                    </div>
                    <div id='Footer-one-right'>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div id="Footer-two"><p>Website developed by Twishanu Aich Roy.</p></div>
            </div>
        </>
    );
}

export default Footer;