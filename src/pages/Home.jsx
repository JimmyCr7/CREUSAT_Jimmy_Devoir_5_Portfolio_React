import imgAbout from '../img/john-doe-about.jpg';
import '../css/home-style.css';
import togglerActiveLinks from '../js/togglerActiveNavLinks';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        togglerActiveLinks(0);
    }, []);

    return(
        <main>
            <section id="container-presentation">
                <h1 className="text-white">Bonjour, je suis Jimmy Creusat</h1>
                <h2 className="text-white">Développeur web fullstack</h2>
                <button type="button" className="btn btn-danger">En savoir plus</button>
            </section>
            <div className="d-flex flex-wrap justify-content-center">
                <section id="container-me" className="container col-lg-4 col-sm-12 mx-0">
                    <h3>A propos</h3>
                    <hr className="border border-3 border-primary"/>
                    <img src={imgAbout} alt="Image d'une personne en train de travailler"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque tempor nisl. Vivamus vitae porttitor massa. Nunc augue magna, dictum non urna et, ultricies placerat ipsum. Donec vulputate sapien ut lorem convallis scelerisque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque tempor nisl. Vivamus vitae porttitor massa. Nunc augue magna, dictum non urna et, ultricies placerat ipsum. Donec vulputate sapien ut lorem convallis scelerisque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque tempor nisl. Vivamus vitae porttitor massa. Nunc augue magna, dictum non urna et, ultricies placerat ipsum. Donec vulputate sapien ut lorem convallis scelerisque.
                    </p>
                </section>
                <section id="container-skills" className="container col-lg-4 col-sm-12 mx-0">
                    <h3>Mes compétences</h3>
                    <hr className="border border-3 border-primary" />
                    <em>HTML5 90%</em>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>CSS3 80%</em>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>JAVASCRIPT 70%</em>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>PHP 60%</em>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>REACT 50%</em>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </section>
            </div>
            
        </main>
    );
}

export default Home;