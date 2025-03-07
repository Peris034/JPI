import AdminSettings from '../models/AdminSettings.js';

export const getLogo = async (req, res) => res.json(await AdminSettings.findOne());
export const updateLogo = async (req, res) => {
    const logo = await AdminSettings.findOneAndUpdate({}, { logo: req.file?.path }, { new: true, upsert: true });
    res.json(logo);
};
