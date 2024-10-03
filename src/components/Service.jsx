const Service = (props) => {
    return(
        <div class="card col-lg-4 col-sm-12">
            <img class="card-img-top my-5" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h3 class="card-title text-center">{props.title}</h3>
                <p class="card-text text-center">{props.desc}</p>
            </div>
        </div>
    );
}

export default Service;