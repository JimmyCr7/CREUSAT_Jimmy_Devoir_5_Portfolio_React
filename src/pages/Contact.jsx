import imgMap from '../img/svg/map-logo.svg';
import imgPosition from '../img/svg/position-logo.svg';
import imgMobile from '../img/svg/mobile-logo.svg';
import imgMail from '../img/svg/mail-logo.svg';
import '../css/contact-style.css';

const Contact = () => {
    return(
        <main class="my-4 flex-column">
            <h1 class="text-center w-100">Contact</h1>
            <p class="text-center w-100">Pour me contacter envue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
            <hr class="border border-3 border-primary w-25 d-block mx-auto"/>
            <div class="row justify-content-center mt-3 mx-3">
                <section class="col-lg-4 col-sm-12 mb-4">
                    <h2>Formulaire de contact</h2>
                    <hr class="border border-2 border-primary"/>
                    <form action="#" method="POST">
                        <input class="form-control mb-2" type="text" placeholder="Votre nom" required/>
                        <input class="form-control mb-2" type="email" placeholder="Votre adresse email" required/>
                        <input class="form-control mb-2" type="tel" placeholder="Votre numéro de téléphone" required/>
                        <input class="form-control mb-2" type="text" placeholder="Sujet" required/>
                        <textarea class="form-control mb-2" name="messContact" id="messContact" placeholder="Votre message" rows="10" required></textarea>
                        <input class="btn btn-primary d-block mx-auto" type="submit" name="sendMessContact" value="Envoyer"/>
                    </form>
                </section>
                <section id="container-coordonnees" class="col-lg-4 col-sm-12">
                    <h2>Mes coordonnées</h2>
                    <hr class="border border-2 border-primary" />
                    <strong>Jimmy Creusat</strong>
                    <address>
                        <div class="d-flex align-items-center">
                            <img class="me-1 d-block" src={imgMap} alt="Icone représentant une carte" />
                            <p class="m-0">5 Place Colombe</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <img class="me-1" src={imgPosition} alt="Icone représentant une position" />
                            <p class="m-0">54700 Pont-à-Mousson</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <img class="me-1" src={imgMobile} alt="Icone représentant un mobile" />
                            <p class="m-0">0645606084</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <img class="me-1" src={imgMail} alt="Icone représentant une enveloppe" />
                            <p class="m-0">jimmy.creusat@gmail.com</p>
                        </div>
                    </address>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.5051855247693!2d6.04952388109391!3d48.90576658810793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794c7be828de6dd%3A0x1c0e08f0d54d43ce!2s5%20Pl.%20Colombe%2C%2054700%20Pont-%C3%A0-Mousson!5e0!3m2!1sfr!2sfr!4v1727878720598!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
            
        </main>
    );
}

export default Contact;