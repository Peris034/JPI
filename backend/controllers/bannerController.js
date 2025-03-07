import Banner from '../models/Banner.js';

export const getBanners = async (req, res) => res.json(await Banner.find());
export const updateBanner = async (req, res) => {
    const banner = await Banner.findOneAndUpdate({}, { imageUrl: req.file?.path }, { new: true, upsert: true });
    res.json(banner);
};
