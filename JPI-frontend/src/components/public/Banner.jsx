import React from "react";

function Banner() {
    const cardStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px", // Adds spacing on smaller screens
        boxSizing: "border-box"
    };

    const contentStyle = {
        background: "#ffffff",
        border: "3px solid #FFD700", // Gold border for premium look
        borderRadius: "20px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
        width: "90%", // Responsive width
        maxWidth: "400px", // Limits size on larger screens
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "20px" // Ensures spacing from screen edges
    };

    const logoStyle = {
        width: "60%",  // Proportional to card size
        maxWidth: "180px", // Limits max size for consistency
        borderRadius: "50%",
        border: "4px solid #FFD700",
        marginBottom: "20px"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#0056b3",
        fontWeight: "bold",
        fontSize: "22px"
    };

    const linkHoverStyle = {
        textDecoration: "underline",
        color: "#004494"
    };

    return (
        <section id="home" style={cardStyle}>
            <div style={contentStyle}>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/JPI.png`} 
                    alt="Jay Parivartan India" 
                    style={logoStyle}
                />
                <a 
                    href="https://jayparivartanindia.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                    onMouseOut={(e) => e.target.style.color = linkStyle.color}
                >
                    jayparivartanindia.com
                </a>
            </div>
        </section>
    );
}

export default Banner;

// import React, { useState, useEffect } from 'react';
// import './Banner.css'; // Ensure this exists

// function Banner() {
//     const [flipped, setFlipped] = useState(false);

//     // Auto flip every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setFlipped(prev => !prev);
//         }, 3000);

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []);

//     return (
//         <section id="home" className="banner-wrapper">
//             <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
//                 <div className="flip-card-inner">

//                     {/* Front Side */}
//                     <div className="flip-card-front">
//                         <div className="front-content">
//                             <div className="flip-logo">
//                                 <img 
//                                     alt="logo" 
//                                     src={`${process.env.PUBLIC_URL}/assets/JPI.png`}
//                                     className="rounded-circle border border-gold flip-logo-img" 
//                                 />
//                             </div>
//                             <ul className="info-list">
//                                 <li><strong>SHAILESH BOGHARA</strong></li>
//                                 <br/>
//                                 <li>
//                                     HUMAN RIGHT GOVERNMENT OF INDIA<br />
//                                     GUJARAT STATE PRESIDENT
//                                 </li><br/>
//                                 <li><i className="fa-solid fa-phone"></i> <a href="tel:+919998826273">+91 99988 26273</a></li><br/>
//                                 <li><i className="fa-solid fa-envelope"></i> <a href="mailto:shailesh.t.boghara@gmail.com">shailesh.t.boghara@gmail.com</a></li><br/>
//                                 <li><i className="fa-solid fa-location-dot"></i> 1012, Palladium Mall, Surat, Gujarat</li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Back Side */}
//                     <div className="flip-card-back">
//                         <h4 className="back-header">Our Services</h4>
//                         <ul className="service-list">
//                             {[
//                                 'Jay Parivartan India', 'Human Right', 'Health Care Products',
//                                 'Home Care Products', 'Personal Care Products', 'Beauty Care Products',
//                                 'Agri Care Products', 'Cattle Food Products', 'Kitchen Products'
//                             ].map((service, index) => (
//                                 <li key={index}>{service}</li>
//                             ))}
//                         </ul>
//                         <p className="back-footer">
//                             JAY PARIVARTAN GHAR GHAR PARIVARTAN DIL SE HAR DIL TAK
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Banner;
