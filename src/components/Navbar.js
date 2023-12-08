import './Navbar.css';
import logo from '../Images/Logo.webp'

function App() {
  return (
    <>
    <div className="nav">
        <div id="nav-left">
            <img src={logo} alt="img" height="45px"/>
            <p>ManageWise</p>
        </div>
        <div id="nav-right">
            <ul>
                <a href="#"><li>Features</li></a>
                <a href="#"><li>FAQ</li></a>
                <a href="#"><li>Pricing</li></a>
                <a href="#"><li>Testimonials</li></a>
                <button>Buy Template</button>
            </ul>
        </div>
    </div>
    </>
  );
}

export default App;