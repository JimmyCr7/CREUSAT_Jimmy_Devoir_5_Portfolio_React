function togglerActiveLinks(nb){
    let tabNavLinks = document.getElementsByClassName('nav-link');

    for(let i = 0; i < tabNavLinks.length; i++){
        tabNavLinks[i].classList.remove('active');
    }

    tabNavLinks[nb].classList.add('active');
}

export default togglerActiveLinks;