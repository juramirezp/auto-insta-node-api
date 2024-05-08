import mongoose from "mongoose";
import * as fs from "fs";

const esquema = new mongoose.Schema({
	description: String,
	img: String,
	date: Date,
});

const ImagesModel = mongoose.model("Insta", esquema);

export const getImages = async (req, res) => {
	try {
		const { id } = req.params;
		const rows = id === undefined ? await ImagesModel.find() : await ImagesModel.findById(id);
		return res.status(200).json({ status: true, data: rows });
	} catch (error) {
		return res.status(500).json({ status: false, errors: error });
	}
};

export const getRandomImage = async (req, res) => {
	try {
		const rows = await ImagesModel.aggregate([{ $sample: { size: 1 } }]);
		return res.status(200).json({ status: true, data: rows });
	} catch (error) {
		return res.status(500).json({ status: false, errors: error });
	}
};

export const saveImages = async (req, res) => {
	try {
		const { description, isValid } = req.body;
		const errors = validar(req.file, "Y");
		if (errors.length > 0) {
			return res.status(400).json({ status: false, errors });
		}
		const img = new ImagesModel({
			description,
			img: "/uploads/" + req.file.filename,
			date: Date.now(),
		});
		await img.save();
		return res.status(201).json({ status: true, data: img });
	} catch (error) {
		return res.status(500).json({ status: false, errors: error });
	}
};

const validar = (img, isValid) => {
	let errors = [];
	if (isValid === "Y" && img === undefined) {
		errors.push("Selecciona una imagen");
	} else {
		// fs.unlinkSync("./public/uploads/" + img.filename);
	}
	return errors;
};

export const deleteImage = async (req, res) => {
	try {
		const { id } = req.params;
		const img = await ImagesModel.findById(id);
		// fs.unlinkSync("./public" + img.img);
		await ImagesModel.deleteOne({ _id: id });
		return res.status(200).json({ status: true, data: img });
	} catch (error) {
		return res.status(500).json({ status: false, errors: error });
	}
};
