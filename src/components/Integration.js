import './Integration.css'
import Integ from '../Images/integ.webp'
function Integration(){
    return(
        <>
        <div id='Integration-main'>
            <section id='Integration-main-one'><p>INTEGRATIONS</p></section>
            <section id='Integration-main-two'><p>Enable <span>integration</span> with other popular tools and platforms</p></section>
            <section id='Integration-main-three'><p>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</p></section>
            <section id='Integration-main-four'><img src={Integ} alt="" /></section>
        </div>
        </>
    );
}
export default Integration;