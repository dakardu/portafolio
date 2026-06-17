import "../pages/enconstruccion.css";
import { useEffect } from "react";

function About() {
	useEffect(() => {
		document.title = "About | dagoberto.dev";
	}, []);

	return (
		<div className="construction-container">
			<div className="construction-icon">🚧</div>

			<p>Esta sección se encuentra actualmente en desarrollo.</p>

			<p>Próximamente estará disponible con más contenido.</p>
		</div>
	);
}

export default About;
