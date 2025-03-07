import AdminSettings from '../models/AdminSettings.js';

export const getPaymentOptions = async (req, res) => res.json(await AdminSettings.findOne());
export const updatePaymentOptions = async (req, res) => {
    const { options } = req.body;
    const payment = await AdminSettings.findOneAndUpdate({}, { paymentOptions: options }, { new: true, upsert: true });
    res.json(payment);
};
