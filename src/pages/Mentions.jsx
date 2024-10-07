import imgMap from '../img/svg/map-logo.svg';
import imgPosition from '../img/svg/position-logo.svg';
import imgMobile from '../img/svg/mobile-logo.svg';
import imgMail from '../img/svg/mail-logo.svg';
import imgWeb from '../img/svg/website-logo.svg';
import '../css/mentions-style.css';
import togglerActiveLinks from '../js/togglerActiveNavLinks';
import { useEffect } from 'react';

const Mentions = () => {

    useEffect(() => {
        togglerActiveLinks(4);
    }, []);

    return(
        <main>
            <h2 class="text-center mt-3">Mentions légales</h2>
            <hr class="border border-3 border-primary w-25 m-auto"/>
            <div class="accordion mx-auto my-3 mx-auto col-lg-9 col-sm-12" id="accordionExample">
                <div class="accordion-item ms-3 me-3">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Jimmy Creusat</strong>
                        <address>
                            <div class="d-flex align-items-center">
                                <img class="me-2" src={imgMap} alt="Icone représentant une carte" />
                                <p class="my-1">5 Place Colombe</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="me-2" src={imgPosition} alt="Icone représentant une position" />
                                <p class="my-1">54700 Pont-à-Mousson, France</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="me-2" src={imgMobile} alt="Icone représentant un téléphone" />
                                <p class="my-1">06 45 60 60 84</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="me-2" src={imgMail} alt="Icone représentant une enveloppe" />
                                <p class="my-1">jimmy.creusat@gmail.com</p>
                            </div>
                        </address>
                    </div>
                    </div>
                </div>
                <div class="accordion-item ms-3 me-3">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>alwaysdata</strong>
                        <address>
                            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                            <div class="d-flex align-items-center">
                                <img class="me-2" src={imgWeb} alt="Icone représentant le web" />
                                <a href="https://alwaysdata.com">www.alwaysdata.com</a>
                            </div>
                        </address>
                    </div>
                    </div>
                </div>
                <div class="accordion-item ms-3 me-3">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Crédits</strong>
                        <p>Ce site a été réalisé par Jimmy Creusat, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a></p>
                        <p class="font-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                        <p class="font-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></p>
                    </div>
                    </div>
                </div>
                </div>
        </main>
    );
}

export default Mentions;