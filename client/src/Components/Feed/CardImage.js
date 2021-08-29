import "./CardText.scss";
import Constants from "../../constants";
import Avatar from "../../assets/avatar.jpg";
import moment from "moment";
import { EmojiHeartEyes, Trash2 } from "react-bootstrap-icons";

function CardImage(props) {
  let DatePosted = props.item.created_at;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="cardheader">
            <img className="cardavatar" src={Avatar} alt="avatar"></img>
            <div className="cardheader__text">
              <h6 className="username ">{window.user.name}</h6>
              <h6 className="cardate">{moment(DatePosted).fromNow()}</h6>
            </div>
          </div>
        </div>
        {/* <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div> */}
        <div
          style={{
            backgroundImage: `url(${Constants.API_URL}/${props.item.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            height: "400px",
          }}
        ></div>
        {/* <img
          src={`${Constants.API_URL}/${props.item.image}`}
          alt="whattt"
          style={{ display: "none" }}
        /> */}
        <div className="card-body">
          <p className="card-text">{props.item.content}</p>
        </div>

        <div className="card-icons">
          <button className="btn">
            <EmojiHeartEyes />
          </button>
          {props.item.user_id === window.user.id && (
            <button
              className="btn"
              onClick={(e) => props.deleteFnc(props.item.id)}
            >
              <Trash2 />
            </button>
          )}
        </div>
        {/* <div className="card-footer text-muted">2 days ago</div> */}
      </div>
    </div>
  );
}

export default CardImage;
