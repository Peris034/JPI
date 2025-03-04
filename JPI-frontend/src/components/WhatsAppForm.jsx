import React, { useState } from 'react';
import axios from 'axios';
import './WhatsAppForm.css';

const WhatsAppForm = () => {
    const [formData, setFormData] = useState({ dialCode: '+91', number: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://jpi-backend.onrender.com/api/send-whatsapp-link', formData);
            if (response.data.success) {
                window.open(response.data.whatsappLink, '_blank');
            } else {
                alert('Failed to generate WhatsApp link');
            }
        } catch (error) {
            alert('Error sending request.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="whatsapp-wrapper">
            <h2 className="sec-ttl">Get Website URL in WhatsApp</h2>
            <form className="whatsapp-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Country Code</label>
                    <select name="dialCode" value={formData.dialCode} onChange={handleChange}>
                        <option value="+91">(+91) India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input type="number" name="number" placeholder="WhatsApp Number" value={formData.number} onChange={handleChange} maxLength="10" />
                </div>
                <div className="form-btn">
                    <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Submit'}</button>
                </div>
            </form>
        </section>
    );
};

export default WhatsAppForm;
