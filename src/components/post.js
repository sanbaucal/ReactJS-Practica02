function Post({ autor, description, img, fecha, likes, coments }) {
    return(
        <div className="card">
            <img src={img} className="card-img-top border-bottom" alt="..."/>
            <div className="card-body">
                <div className="card-text">
                    <div className="d-flex justify-content-between">
                        <small className="text-muted">{fecha}</small>
                        <button id="js_liked_card" className="btn btn-sm btn-outline-danger js_liked_card">
                            <i className="bi bi-heart"> </i>
                            {likes}
                        </button>
                    </div>
                </div>
                <h5 className="card-title">{autor}</h5>
                <p className="card-text">{description}</p>
                <a href="##" className="text-muted text-decoration-none"><i className="bi bi-chat-left"></i> Comentarios ({coments})</a>
            </div>
        </div>
    )
};

export default Post;