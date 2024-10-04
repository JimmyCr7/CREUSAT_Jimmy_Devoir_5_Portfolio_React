import Skill from '../components/Skill';
import imgAbout from '../img/john-doe-about.jpg';
import '../css/home-style.css';

const Home = () => {
    return(
        <main>
            <section>
                <h1 class="text-white">Bonjour, je suis Jimmy Creusat</h1>
                <h2 class="text-white">Développeur web fullstack</h2>
                <button type="button" class="btn btn-danger">En savoir plus</button>
            </section>
            <section class="col-lg-4 col-sm-12">
                <h3>A propos</h3>
                <hr class="border border-3 border-primary"/>
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
            <section class="col-lg-4 col-sm-12">
                <h3>Mes compétences</h3>
                <hr class="border border-3 border-primary" />
                {/*
                <Skill skillName="HTML5" percentage="90%" bgColor="bg-danger"/>
                <Skill skillName="CSS3" percentage="80%" bgColor="bg-info"/>
                <Skill skillName="JAVASCRIPT" percentage="70%" bgColor="bg-warning"/>
                <Skill skillName="PHP" percentage="60%" bgColor="bg-success"/>
                <Skill skillName="REACT" percentage="50%" bgColor="bg-primary"/>
                */}
                <em>HTML5 90%</em>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <em>CSS3 80%</em>
                <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <em>JAVASCRIPT 70%</em>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <em>PHP 60%</em>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <em>REACT 50%</em>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </section>
        </main>
    );
}

export default Home;