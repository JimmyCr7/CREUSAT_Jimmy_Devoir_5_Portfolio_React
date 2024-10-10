import logogithub from '../img/svg/github-logo.svg';
import logotwitter from '../img/svg/twitter-logo.svg';
import logolinkedin from '../img/svg/linkedin-logo.svg';
import '../css/footer-style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer class="bg-dark row justify-content-center text-white p-4">
            <section class="col-lg-3 col-sm-12 py-2">
                <h2>Jimmy CREUSAT</h2>
                <address>
                    <p>5 place Colombe</p>
                    <p>54700 Pont-à-Mousson, France</p>
                    <p>
                        <a href="tel:0645606084">0645606084</a>
                    </p>
                    <p>
                        <a href="mailto:jimmy.creusat@gmail.com">jimmy.creusat@gmail.com</a>
                    </p>
                </address>
                <div>
                    <a href="https://github.com/JimmyCr7" target="_blank" rel="nofollow"><img src={logogithub} alt="Icone de Github"/></a>
                    <a href="https://x.com/JimCr7796" target="_blank" rel="nofollow"><img src={logotwitter} alt="Icone de Twitter"/></a>
                    <a href="https://www.linkedin.com/in/jimmy-creusat-23048622b/" target="_blank" rel="nofollow"><img src={logolinkedin} alt="Icone de Linkedin"/></a>
                </div>
            </section>
            <section class="col-lg-3 col-sm-12 py-2">
                <h2>Liens utiles</h2>
                <ul class="list-unstyled">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>
                    <li><Link to="/mentions">Mentions légales</Link></li>
                </ul>
            </section>
            <section class="col-lg-3 col-sm-12 py-2">
                <h2>Mes dernières réalisations</h2>
                <ul class="list-unstyled">
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">Fresh Food</Link></li>
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">Restaurant Akira</Link></li>
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">Espace bien-être</Link></li>
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">SEO</Link></li>
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">Creation d'une API</Link></li>
                    <li><Link to="/portfolio" target="_blank" rel="nofollow">Maquette d'un site</Link></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;