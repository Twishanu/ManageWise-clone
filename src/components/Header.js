import './Header.css'
import dashboard from '../Images/dashboard.webp'
function Header(){
    return(
    <>
    <div className='section' data-aos="fade-up" data-aos-duration="2000">
        <section id='sectionone'>
            <div>
                {/* <img src="" alt="hi" /> */}
                <p>WELCOME TO MANAGE WISE</p>
            </div>
        </section>
        <section id='sectiontwo'><p>Empower your business with</p><p><span>Strategic</span> insights</p></section>
        <section id='sectionthree'><p>Powerful management platform designed to streamline your business</p><p>operations, boost productivity, and drive success</p></section>
        <section id='sectionfour'><button id='btnone'>Get Started</button><button id='btntwo'>Watch Demo</button></section>
        <section id='sectionfive' data-aos="zoom-out-up" data-aos-duration="2000"><img src={dashboard} alt="" /></section>
    </div>
    </>
    );
}

export default Header;