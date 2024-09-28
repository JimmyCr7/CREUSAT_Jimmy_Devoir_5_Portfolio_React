const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <a class="navbar-brand" href="#">Jimmy CREUSAT</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link text-uppercase font-weight-bold" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" href="#">Mentions légales</a>
                    </li>
                </ul>
            </div>
            </nav>
        </header>
    );
}

export default Header;