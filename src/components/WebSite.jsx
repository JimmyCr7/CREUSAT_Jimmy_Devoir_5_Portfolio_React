const WebSite = (props) => {
    return(
        <div class="card col-sm-12 col-lg-4 px-0">
            <img class="card-img-top img-fluid" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <button class="btn btn-primary d-block mx-auto">Voir le site</button>
            </div>
            <div class="card-footer">
                <small class="text-muted">Réalisé avec {props.tool}</small>
            </div>
        </div>
    );
}

export default WebSite;