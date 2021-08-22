import Constants from "../../constants";

function CardImage(props) {
  return (
    <div className="card mb-3">
      <h3 className="card-header">
        Image {props.item.created_at} {props.item.image}
      </h3>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <img src={`${Constants.API_URL}/${props.item.image}`} alt="whattt" />
      <div className="card-body">
        <p className="card-text">{props.item.content}</p>
      </div>

      <div className="card-body">
        <button className="btn">Like</button>
        <button className="btn">Delete</button>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}

export default CardImage;
