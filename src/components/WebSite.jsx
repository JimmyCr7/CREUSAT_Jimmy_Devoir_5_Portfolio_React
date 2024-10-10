const WebSite = (props) => {
    return(
        <div class="card col-sm-12 col-lg-3 m-2 text-center">
            <img class="card-img-top img-fluid" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h2 class="card-title">{props.title}</h2>
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