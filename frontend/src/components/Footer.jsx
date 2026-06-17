import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<h3>Dagoberto Duran</h3>

				<div className="footer-roles">
					<span>Cloud Engineer</span>
					<span className="footer-separator">|</span>

					<span>System Administrator</span>
					<span className="footer-separator">|</span>

					<span>DevOps</span>
				</div>

				<div className="footer-links">
					<a
						href="https://github.com/dakardu"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>

					<a
						href="https://linkedin.com/in/dagobertoduran"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin />
					</a>

					<a href="mailto:unodago@email.com">
						<MdEmail />
					</a>

					<a
						href="path/to/your/resume.pdf"
						target="_blank"
						rel="noreferrer"
					>
						<FaFilePdf />
					</a>
				</div>

				<small>© 2026 Dagoberto Duran</small>
			</div>
		</footer>
	);
}

export default Footer;
