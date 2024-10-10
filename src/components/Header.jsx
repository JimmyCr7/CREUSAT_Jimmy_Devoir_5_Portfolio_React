import { Link } from 'react-router-dom';
import '../css/header-style.css';

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Jimmy Creusat</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link text-uppercase active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-uppercase" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-uppercase" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-uppercase" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
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