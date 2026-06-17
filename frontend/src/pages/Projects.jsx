import "../pages/enconstruccion.css";
import { useEffect } from "react";
/*import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects()
			.then((data) => setProjects(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h1>Proyectos</h1>

			{projects.map((project) => (
				<div key={project._id}>
					<h2>{project.name}</h2>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
}

export default Projects;*/

function Projects() {
	useEffect(() => {
		document.title = "Projects | dagoberto.dev";
	}, []);

	return (
		<div className="construction-container">
			<div className="construction-icon">🚧</div>

			<p>Esta sección se encuentra actualmente en desarrollo.</p>

			<p>Próximamente estará disponible con más contenido.</p>
		</div>
	);
}

export default Projects;
