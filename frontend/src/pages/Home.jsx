import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		document.title = "Home | dagoberto.dev";
	}, []);

	return (
		<>
			<Hero />
			<SobreMi />
		</>
	);
}

export default Home;
