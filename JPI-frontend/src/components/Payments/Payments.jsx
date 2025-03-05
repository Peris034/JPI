import React from 'react';
import './Payments.css';
import paymentImage from '../../assets/payment.png';

// Future-proof: You can easily extend this array to add more payment options
const paymentDetails = [
    {
        name: "Tilak Enterprise",
        image: paymentImage,
    }
];

const Payments = () => (
    <section id="payments" className="payments-wrapper">
        <h2 className="sec-ttl">Payment Details</h2>

        <div className="payments-grid">
            {paymentDetails.map((payment, index) => (
                <div className="payments-item" key={index}>
                    <div className="payments-card">
                        <img src={payment.image} alt={payment.name} className="payment-image" />
                        <p className="payment-name">{payment.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Payments;
