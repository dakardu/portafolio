const Project = require("../models/Project");

const getProjects = async (req, res) => {
	try {
		const projects = await Project.find();

		res.json(projects);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

const getProjectById = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		if (!project) {
			return res.status(404).json({
				error: "Proyecto no encontrado",
			});
		}

		res.json(project);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

const createProject = async (req, res) => {
	try {
		const project = await Project.create({
			name: "Automatización con GiHub Actions",
			description:
				"Arquitectura de 3 capas lista para producción utilizando NGINX, Apache (x3), MariaDB y Redis completamente contenerizada con Docker.",
			githubUrl:
				"https://github.com/dakardu/3tier-container-architecture",
			technologies: [
				"Docker",
				"Oracle Cloud",
				"Nginx",
				"Apache",
				"Redis",
			],
			category: "Cloud",
			featured: true,
			status: "Completado",
			images: "",
			architecture: {
				frontend: "PHP",
				backend: "Apache",
				database: "MariaDB",
				infrastructure: ["Docker", "Oracle Cloud", "Docker-compose"],
			},
		});
		res.status(201).json(project);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

const updateProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				returnDocument: "after",
			},
		);

		if (!project) {
			return res.status(404).json({
				error: "Proyecto no encontrado",
			});
		}

		res.json(project);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

const deleteProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndDelete(req.params.id);

		if (!project) {
			return res.status(404).json({
				error: "Proyecto no encontrado",
			});
		}

		res.json({
			message: "Proyecto eliminado",
		});
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

module.exports = {
	getProjects,
	getProjectById,
	createProject,
	updateProject,
	deleteProject,
};
