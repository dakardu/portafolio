const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			default: "",
		},

		githubUrl: {
			type: String,
			default: "",
		},

		homepage: {
			type: String,
			default: "",
		},

		technologies: {
			type: [String],
			default: [],
		},

		category: {
			type: String,
			default: "",
		},

		featured: {
			type: Boolean,
			default: false,
		},

		status: {
			type: String,
			default: "active",
		},

		images: {
			type: String,
			default: "",
		},

		architecture: {
			frontend: String,
			backend: String,
			database: String,
			infrastructure: [String],
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Project", projectSchema);
