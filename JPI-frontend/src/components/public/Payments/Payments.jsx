import React from 'react';
import './Payments.css';

// Payment details array - pointing to public assets directly
const paymentDetails = [
    {
        name: "Tilak Enterprise",
        image: `${process.env.PUBLIC_URL}/assets/payment.png`,
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
