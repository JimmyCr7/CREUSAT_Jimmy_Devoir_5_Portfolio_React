function togglerActiveLinks(nb){
    let tabNavLinks = document.getElementsByClassName('nav-link');

    for(let i = 0; i < tabNavLinks.length; i++){
        tabNavLinks[i].classList.remove('active');
        tabNavLinks[i].style.textDecoration = "none";
    }

    tabNavLinks[nb].classList.add('active');
    tabNavLinks[nb].style.textDecoration = "underline";
}

export default togglerActiveLinks;