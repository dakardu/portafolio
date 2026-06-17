import "./navbar.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			<div className="logo">{"<dagoberto.dev/>"}</div>

			<button
				className="menu-toggle"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? "✕" : "☰"}
			</button>

			<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/projects"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/resume"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Resume
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
