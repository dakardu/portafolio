import avatar from "../assets/images/avatar.png";
import "./hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-content">
				<div className="hero-text">
					<h1>
						¡Hola! <span className="wave">👋</span>
					</h1>

					<h1>
						Soy <span>Dagoberto Duran</span>
					</h1>

					<h3 className="hero-roles">
						<span>Cloud Engineer</span>
						<span className="separator">|</span>

						<span>System Administrator</span>
						<span className="separator">|</span>

						<span>DevOps</span>
					</h3>

					<div className="typing-container">
						<TypeAnimation
							className="typing-text"
							sequence={[
								"Windows Server ⊞",
								2000,
								"Automatización ⚙",
								2000,
								"Cloud Azure - AWS ☁",
								2000,
								"Linux & Bash >",
								2000,
								"Docker Containers ⬢",
								2000,
								"DevOps & CI/CD ⟳",
								2000,
								"Oracle Cloud OCI ☁",
								2000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</div>
				</div>

				<div className="hero-image">
					<img src={avatar} alt="Dagoberto Duran" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
