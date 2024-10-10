import imgAbout from '../img/john-doe-about.jpg';
import imgAccount from '../img/svg/account-logo.svg';
import imgParagraph from '../img/svg/paragraph-logo.svg';
import imgBox from '../img/svg/box-logo.svg';
import imgFollower from '../img/svg/follower-logo.svg';
import imgPosition from '../img/svg/position-logo.svg';
import '../css/home-style.css';
import togglerActiveLinks from '../js/togglerActiveNavLinks';
import { useEffect, useState } from 'react';

const Home = () => {

    const [profilGithub, setProfilGithub] = useState([]);

    const getInfosGithub = async () => {
        const res = await fetch('https://api.github.com/users/jimmycr7');
        const json = await res.json();
        setProfilGithub(json);
    }

    useEffect(() => {
        togglerActiveLinks(0);
        getInfosGithub();
    }, []);

    return(
        <main>
            <section id="container-presentation">
                <h1 className="text-white">Bonjour, je suis Jimmy Creusat</h1>
                <h2 className="text-white">Développeur web fullstack</h2>
                <button id="btnModal" type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalProfilGithub">En savoir plus</button>
            </section>
            <section className="d-flex flex-wrap col-lg-8 col-sm-12 justify-content-center mx-auto shadow-lg my-3">
                <article id="container-me" className="container-fluid col-lg-6 pb-0">
                    <h3 className="text-start">A propos</h3>
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
                </article>
                <article id="container-skills" className="container-fluid col-lg-6 pb-5">
                    <h3 className="text-start">Mes compétences</h3>
                    <hr className="border border-3 border-primary" />
                    <em>HTML5 90%</em>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>CSS3 80%</em>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>JAVASCRIPT 70%</em>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>PHP 60%</em>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <em>REACT 50%</em>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </article>
            </section>
            <div className="modal fade" id="modalProfilGithub" tabindex="-1" aria-labelledby="modalProfilGithub" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header border-1 border-secondary">
                            <h3 className="modal-title" id="modalProfilGithubLabel">Mon profil Github</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <section className="d-flex">
                                <img className="d-block w-50 img-fluid " src={profilGithub.avatar_url} alt="Image de Jimmy Creusat" />
                                <aside className="d-flex w-50 flex-wrap px-3">
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgAccount} alt="Icone représentant une personne" />
                                        <a href="https://github.com/JimmyCr7">Jimmy Creusat</a>
                                    </div>
                                    <hr className="d-block w-100 border-2"/>
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgPosition} alt="Icone représentant une localisation" />
                                        <p className="mb-0">5 Place Colombe, 54700 PAM</p>
                                    </div>
                                    <hr className="d-block w-100 border-2" />
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgParagraph} alt="Icone représentant du texte" />
                                        <p className="mb-0">Ma description</p>
                                    </div>
                                    <hr className="d-block w-100 border-2" />
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgBox} alt="Icone représentant une boite" />
                                        <p className="mb-0">Repositories : {profilGithub.public_repos}</p>
                                    </div>
                                    <hr className="d-block w-100 border-2" />
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgFollower} alt="Icone représentant deux personnes" />
                                        <p className="mb-0">Followers : {profilGithub.followers}</p>
                                    </div>
                                    <hr className="d-block w-100 border-2" />
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src={imgFollower} alt="Icone représentant deux personnes" />
                                        <p className="mb-0">Following : {profilGithub.following}</p>
                                    </div>
                                </aside>
                            </section>
                        </div>
                        <div className="modal-footer border-1 border-secondary">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;