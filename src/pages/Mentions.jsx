import imgMap from '../img/svg/map-logo.svg';
import imgPosition from '../img/svg/position-logo.svg';
import imgMobile from '../img/svg/mobile-logo.svg';
import imgMail from '../img/svg/mail-logo.svg';
import imgWeb from '../img/svg/website-logo.svg';

const Mentions = () => {
    return(
        <main>
            <h2 class="text-center">Mentions légales</h2>
            <hr class="border border-primary w-25 m-auto"/>
            <div id="accordion" class="w-50 mx-auto my-3">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                        </button>
                    </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <strong>Jimmy Creusat</strong>
                        <address>
                            <div class="row">
                                <img class="mr-2" src={imgMap} alt="Icone représentant une carte" />
                                <p class="my-1">5 Place Colombe</p>
                            </div>
                            <div class="row">
                                <img class="mr-2" src={imgPosition} alt="Icone représentant une position" />
                                <p class="my-1">54700 Pont-à-Mousson, France</p>
                            </div>
                            <div class="row">
                                <img class="mr-2" src={imgMobile} alt="Icone représentant un téléphone" />
                                <p class="my-1">06 45 60 60 84</p>
                            </div>
                            <div class="row">
                                <img class="mr-2" src={imgMail} alt="Icone représentant une enveloppe" />
                                <p class="my-1">jimmy.creusat@gmail.com</p>
                            </div>
                        </address>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                        </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        <strong>alwaysdata</strong>
                        <address>
                            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                            <div class="row">
                                <img class="mr-2" src={imgWeb} alt="Icone représentant le web" />
                                <a href="https://alwaysdata.com">www.alwaysdata.com</a>
                            </div>
                        </address>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
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