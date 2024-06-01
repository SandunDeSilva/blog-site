import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, title, url, description }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <span className="postTitle">
        <Link to={url} className="link">
          {title}
        </Link>
      </span>
      <hr />
      <p className="postDesc">{description}</p>
    </div>
  );
}
