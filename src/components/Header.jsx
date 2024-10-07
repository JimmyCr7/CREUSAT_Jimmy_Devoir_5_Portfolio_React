import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Jimmy Creusat</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        {/*<a class="nav-link active" aria-current="page" href="#">Home</a>*/}
                        <Link class="nav-link text-uppercase active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        {/*<a class="nav-link" href="#">Services</a>*/}
                        <Link class="nav-link text-uppercase" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                        {/*<a class="nav-link" href="#">Portfolio</a>*/}
                        <Link class="nav-link text-uppercase" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                        {/*<a class="nav-link" href="#">Contact</a>*/}
                        <Link class="nav-link text-uppercase" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                        {/*<a class="nav-link" href="#">Mentions légales</a>*/}
                        <Link class="nav-link text-uppercase" to="/mentions">Mentions légales</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
}

export default Header;