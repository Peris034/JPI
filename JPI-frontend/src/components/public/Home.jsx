import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import Certificates from './Certificates/Certificates';
import Downloads from './Downloads/Downloads';
import Payments from './Payments/Payments';
import Inquiry from './Inquiry/Inquiry';
import Contact from './Contact/Contact';
import WhatsAppForm from './WhatsAppForm';

const Home = () => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                <Banner />
                {/* <Products /> */}
                <Certificates />
                <Downloads />
                <Payments />
                {/* <Inquiry /> */}
                <Contact />
                {/* <WhatsAppForm /> */}
            </div>
        </div>
    );
};

export default Home;
