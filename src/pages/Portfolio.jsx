import WebSite from '../components/WebSite';
import imgFreshFood from '../img/portfolio/fresh-food.jpg';
import imgAkira from '../img/portfolio/restaurant-japonais.jpg';
import imgBienEtre from '../img/portfolio/espace-bien-etre.jpg';
import imgSEO from '../img/portfolio/seo.jpg';
import imgAPI from '../img/portfolio/coder.jpg';
import imgMaquette from '../img/portfolio/screens.jpg';
import '../css/portfolio-style.css';

const Portfolio = () => {
    return(
        <main>
            <div class="mb-3 img-banner"></div>
            <h2 class="text-center">Portfolio</h2>
            <p class="text-center">Voici quelques-unes de mes réalisations</p>
            <hr class="border border-3 border-primary w-25 mx-auto"/>
            <section class="d-flex flex-wrap mx-auto my-5 justify-content-center">
                <WebSite img={imgFreshFood} title="Fresh Food" desc="Site de vente de produits frais en ligne" tool="PHP et MySQL"/>
                <WebSite img={imgAkira} title="Restaurant Akira" desc="Site de vente de produits frais en ligne" tool="WordPress"/>
                <WebSite img={imgBienEtre} title="Espace bien-être" desc="Site de vente de services de relaxation" tool="LARAVEL"/>
                <WebSite img={imgSEO} title="SEO" desc="Amélioration du référencement d'un site e-commerce" tool="outils SEO"/>
                <WebSite img={imgAPI} title="Création d'une API" desc="Création d'une API RESTFULL publique" tool="PHP - SYMFONY"/>
                <WebSite img={imgMaquette} title="Maquette d'un site web" desc="Création du prototype d'un site" tool="FIGMA"/>
            </section>
        </main>
    );
}

export default Portfolio;