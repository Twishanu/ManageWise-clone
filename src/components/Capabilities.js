import './Capabilities.css'
import TaskManagementpic from '../Images/taskmanagement.webp'
import Schedule from '../Images/schedule.webp'
import Communication from '../Images/communication.webp'
import Analytics from '../Images/analytics.webp'
function Capabilities(){
    return(<>
        <div className='Capsection'>
        <section id='Capsectionone'>
            <div>
                {/* <img src="" alt="hi" /> */}
                <p>PREMIER FEATURES</p>
            </div>
        </section>
        <section id='Capsectiontwo'><p>Discover our product's <span>Capabilities</span></p></section>
        <section id='Capsectionthree'><p>Don't settle for mediocrity - embrace the future of management</p><p>with Manage Wise.</p></section>
        <section id='Capsectionfour' data-aos="zoom-in">
            <div id='Capsectionfourleftdiv'>
                <p></p>
                <p>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
            </div>
        
            <div id='Capsectionfourrightdiv'>
                <img src={TaskManagementpic} alt="" />
                <b><p>Smart Task Management</p></b>
                <p>Say goodbye to chaos with our smart task management system</p>
            </div>
        </section>
        <section id='Capsectionfive' data-aos="fade-up"
     data-aos-duration="1000">
            <div><img src={Schedule} alt="" /><b><p id='Capsectionfiveheading'>Flexible Scheduling</p></b>
            <p id='Capsectionfivepara'>Stay productive with our flexible scheduling system</p></div>
            <div><img src={Communication} alt="" /><b><p>Easy Communication</p></b>
            <p>Collaborate seamlessly with your team in real-time</p></div>
            <div><img src={Analytics} alt="" /><b><p>Analytics</p></b>
            <p>Gain valuable insights with our advanced analytics feature</p></div>
        </section>
    </div>
    </>);
}

export default Capabilities;