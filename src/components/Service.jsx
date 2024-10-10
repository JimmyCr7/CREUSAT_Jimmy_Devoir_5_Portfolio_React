const Service = (props) => {
    return(
        <div class="card col-lg-3 col-sm-12 mx-2 mb-3">
            <img class="card-img-top my-5 mx-auto" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h2 class="card-title text-center">{props.title}</h2>
                <p class="card-text text-center">{props.desc}</p>
            </div>
        </div>
    );
}

export default Service;