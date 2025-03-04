import React, { useState, useEffect } from 'react';
import './Banner.css'; // Make sure this file exists and has the styles below
import logo from '../assets/JPI.png';

function Banner() {
    const [flipped, setFlipped] = useState(false);

    // Auto flip every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prev => !prev);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section id="home" className="banner-wrapper">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-inner">

                    {/* Front Side */}
                    <div className="flip-card-front">
                        <div className="front-content">
                            <div className="flip-logo">
                                <img 
                                    alt="logo" 
                                    src={logo} 
                                    className="rounded-circle border border-gold" 
                                    width="140" 
                                    height="140" 
                                />
                            </div>
                            <ul className="info-list">
                                <li>
                                    <strong>SHAILESH BOGHARA</strong>
                                </li>
                                <li>
                                    HUMAN RIGHT GOVERNMENT OF INDIA<br />
                                    GUJARAT STATE PRESIDENT
                                </li>
                                <li><i className="fa-solid fa-phone"></i> <a href="tel:+919998826273">+91 99988 26273</a></li>
                                <li><i className="fa-solid fa-envelope"></i> <a href="mailto:shailesh.t.boghara@gmail.com">shailesh.t.boghara@gmail.com</a></li>
                                <li><i className="fa-solid fa-location-dot"></i> 1012, Palladium Mall, Surat, Gujarat</li>
                            </ul>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back">
                        <h4 className="back-header">Our Services</h4>
                        <ul className="service-list">
                            {['Jay Parivartan India', 'Human Right', 'Health Care Products', 'Home Care Products', 'Personal Care Products', 'Beauty Care Products', 'Agri Care Products', 'Cattle Food Products', 'Kitchen Products'].map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                        <p className="back-footer">JAY PARIVARTAN GHAR GHAR PARIVARTAN DIL SE HAR DIL TAK</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
