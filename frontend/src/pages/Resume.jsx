import "../pages/enconstruccion.css";
import { useEffect } from "react";

function Resume() {
	useEffect(() => {
		document.title = "Resume | dagoberto.dev";
	}, []);

	return (
		<div className="construction-container">
			<div className="construction-icon">🚧</div>

			<p>Esta sección se encuentra actualmente en desarrollo.</p>

			<p>Próximamente estará disponible con más contenido.</p>
		</div>
	);
}

export default Resume;
