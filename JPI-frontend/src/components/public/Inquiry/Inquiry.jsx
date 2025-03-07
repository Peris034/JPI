import React from 'react';
import './Inquiry.css';

const Inquiry = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const backendURL = process.env.REACT_APP_BACKEND_URL;
            const response = await fetch(`${backendURL}/api/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Thank you for your inquiry!');
                event.target.reset();
            } else {
                const result = await response.json();
                alert('Failed to submit inquiry: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            alert('Network error! Please check your connection or try again later.');
            console.error('Error during inquiry submission:', error);
        }
    };

    return (
        <section id="inquiry" className="inquiry-wrapper">
            <h2 className="sec-ttl">Inquiry</h2>

            <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="inline-fields">
                    <div className="form-group half-width">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required />
                    </div>
                    <div className="form-group half-width">
                        <label htmlFor="phone">Phone*</label>
                        <input type="tel" id="mobile" name="mobile" className="form-control" placeholder="Your Phone*" required />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>Email*</label>
                    <input type="email" name="email" className="form-control" placeholder="Your Email*" required />
                </div>

                <div className="form-group full-width">
                    <label>Topic</label>
                    <input type="text" name="topic" className="form-control" placeholder="Topic" />
                </div>

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
};

export default Inquiry;
