import "./CardText.scss";
import moment from "moment";
import { EmojiHeartEyes, ThreeDots, Trash2 } from "react-bootstrap-icons";
import Constants from "../../constants";

function CardText(props) {
  let DatePosted = props.item.created_at;

  return (
    <div className="card">
      <div className="card-body">
        <div className="cardheader">
          <img
            className="cardavatar"
            src={`${Constants.API_URL}/${props.item.avatar}`}
            alt="avatar"
          ></img>
          <div className="cardheader__text">
            <h6 className="username ">{props.item.name}</h6>
            <h6 className="cardate">{moment(DatePosted).fromNow()}</h6>
          </div>
          <div className="cardheader__dots">
            <ThreeDots />
          </div>
        </div>
        <p className="card-text">{props.item.content}</p>

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

export default CardText;
