function CardText(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.item.created_at}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{props.item.content}</p>
        <button className="btn">Like</button>
        {props.item.user_id === window.user.id && (
          <button
            className="btn"
            onClick={(e) => props.deleteFnc(props.item.id)}
          >
            Delete Post
          </button>
        )}
      </div>
    </div>
  );
}

export default CardText;
