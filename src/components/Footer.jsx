import logogithub from '../img/svg/github-logo.svg';
import logotwitter from '../img/svg/twitter-logo.svg';
import logolinkedin from '../img/svg/linkedin-logo.svg';

const Footer = () => {
    return(
        <footer class="bg-dark row justify-content-center text-left text-white px-4">
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
                    <a href="https://github.com/JimmyCr7"><img src={logogithub} alt="Icone de Github"/></a>
                    <a href="https://x.com/JimCr7796"><img src={logotwitter} alt="Icone de Twitter"/></a>
                    <a href="https://www.linkedin.com/in/jimmy-creusat-23048622b/"><img src={logolinkedin} alt="Icone de Linkedin"/></a>
                </div>
            </section>
            <section class="col-lg-3 col-sm-12 py-2">
                <h2>Liens utiles</h2>
                <ul class="list-unstyled">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Me contacter</a></li>
                    <li><a href="#">Mentions légales</a></li>
                </ul>
            </section>
            <section class="col-lg-3 col-sm-12 py-2">
                <h2>Mes dernières réalisations</h2>
                <ul class="list-unstyled">
                    <li><a href="#">Fresh Food</a></li>
                    <li><a href="#">Restaurant Akira</a></li>
                    <li><a href="#">Espace bien-être</a></li>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">Creation d'une API</a></li>
                    <li><a href="#">Maquette d'un site</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;