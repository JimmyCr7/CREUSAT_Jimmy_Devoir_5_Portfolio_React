import Skill from '../components/Skill';
import imgAbout from '../img/john-doe-about.jpg';

const Home = () => {
    return(
        <main>
            <section>
                <h2 class="text-white">Bonjour, je suis Jimmy Creusat</h2>
                <h3 class="text-white">Développeur web fullstack</h3>
                <button class="bg-danger text-white">En savoir plus</button>
            </section>
            <section class="col-lg-4 col-sm-12">
                <h2>A propos</h2>
                <hr class="border border-primary"/>
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
                <h2>Mes compétences</h2>
                <hr class="border border-primary" />
                <Skill skillName="HTML5" percentage="90%" bgColor="bg-danger"/>
                <Skill skillName="CSS3" percentage="80%" bgColor="bg-info"/>
                <Skill skillName="JAVASCRIPT" percentage="70%" bgColor="bg-warning"/>
                <Skill skillName="PHP" percentage="60%" bgColor="bg-success"/>
                <Skill skillName="REACT" percentage="50%" bgColor="bg-primary"/>
            </section>
        </main>
    );
}

export default Home;