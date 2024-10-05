import Service from '../components/Service';
import imgZoom from '../img/svg/zoom-logo.svg';
import imgCode from '../img/svg/code-logo.svg';
import imgBrush from '../img/svg/brush-logo.svg';
import '../css/services-style.css';

const Services = () => {
    return(
        <main>
            <div className="mb-3 img-banner"></div>
            <h2 className="text-center w-100">Mon offre de services</h2>
            <p className="text-center w-100">Voici les prestations sur lesquelles je peux intervenir</p>
            <hr className="border border-3 border-primary w-25 mx-auto d-block"/>
            <section id="container-services" className="container d-flex flex-wrap justify-content-center my-4">
                <Service img={imgBrush} title="UX Design" desc="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc) en placant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expéreince utilisateur la plus fluide et agréable possible"/>
                <Service img={imgCode} title="Développement web" desc="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc) et des frameworks (Bootstrap, React, Angular, etc)"/>
                <Service img={imgZoom} title="Référencement" desc="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc) L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site"/>
            </section>
        </main>
    );
}

export default Services;