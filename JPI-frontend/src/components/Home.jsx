import React from 'react';
import Banner from './Banner';
import Certificates from './Certificates/Certificates';
import Downloads from './Downloads/Downloads';
import Payments from './Payments/Payments';
import Inquiry from './Inquiry/Inquiry';
import Contact from './Contact/Contact';
import WhatsAppForm from './WhatsAppForm';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                <Banner />
                <Certificates />
                <Downloads />
                <Payments />
                <Inquiry />
                <Contact />
                <WhatsAppForm />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
