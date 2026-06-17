import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
