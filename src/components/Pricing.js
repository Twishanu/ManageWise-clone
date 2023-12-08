import './Pricing.css'
function Pricing(){
    return(
        <>
        <div id='Pricing' data-aos="fade-up" data-aos-duration="2000">
            <div id='Pricing-one'><p>PRICING</p></div>
            <div id='Pricing-two'><p>Select your ideal <span>Pricing</span> plan</p></div>
            <div id='Pricing-three'><p>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p></div>
            <div id='Pricing-four'>
                <div id='Pricing-four-cardone' className='card'>
                    <div className='Pricing-four-plan'><p>FREE</p></div>
                    <div className='Pricing-four-price'><p><span>$0</span>/month</p></div>
                    <div className='Pricing-four-features'><p>Access to all basic features</p><p>Reporting and analytics</p><p>Up to 5 individual users</p><p>Chat and email support</p></div>
                    <div className='Pricing-four-button'><button>Get started</button></div>
                </div>
                <div id='Pricing-four-cardtwo' className='card'>
                    <div className='Pricing-four-plan'><p>STANDARD</p></div>
                    <div className='Pricing-four-price'><p><span>$25</span>/month</p></div>
                    <div className='Pricing-four-features'><p>Access to all basic features</p><p>Reporting and analytics</p><p>Up to 5 individual users</p><p>Chat and email support</p><p>3+ Integrations</p><p>Account Performance Reporting</p></div>
                    <div className='Pricing-four-button'><button>Get started</button></div>
                </div>
                <div id='Pricing-four-cardthree' className='card'>
                    <div className='Pricing-four-plan'><p>BUSINESS</p></div>
                    <div className='Pricing-four-price'><p><span>$40</span>/month</p></div>
                    <div className='Pricing-four-features'><p>Access to all basic features</p><p>Reporting and analytics</p><p>Up to 5 individual users</p><p>Chat and email support</p><p>3+ Integrations</p></div>
                    <div className='Pricing-four-button'><button>Get started</button></div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Pricing;