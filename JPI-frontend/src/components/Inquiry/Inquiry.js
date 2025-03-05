import React from 'react';
import './Inquiry.css';

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('https://jpi-backend.onrender.com/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Thank you for your inquiry!');
        event.target.reset();
    } else {
        const result = await response.json();
        alert('Failed to submit inquiry: ' + result.error);
    }
};

const Inquiry = () => (
    <section id="inquiry" className="inquiry-wrapper">
        <h2 className="sec-ttl">Inquiry</h2>

        <form className="inquiry-form" onSubmit={handleSubmit}>
            {[
                { type: "text", name: "name", placeholder: "Name*", required: true },
                { type: "number", name: "mobile", placeholder: "Phone*", required: true },
                { type: "email", name: "email", placeholder: "Email*", required: true },
                { type: "text", name: "topic", placeholder: "Topic" }
            ].map((field, index) => (
                <div className={`form-group ${index < 2 ? 'half-width' : 'full-width'}`} key={index}>
                    <label>{field.placeholder}</label>
                    <input {...field} className="form-control" />
                </div>
            ))}

            <div className="form-group full-width">
                <label>Description</label>
                <textarea className="form-control" placeholder="Description" name="message"></textarea>
            </div>

            <p className="privacy-note">
                By using this form, you agree to the processing of your data to conduct consultations and present offers.
            </p>

            <div className="form-btn">
                <button type="submit" className="btn-submit">Submit Now</button>
            </div>
        </form>
    </section>
);

export default Inquiry;
