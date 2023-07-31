import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo({ isSmall }) {
  const Tag = isSmall ? "h3" : "h1";
  return (
    <Link to="/" className="hyperlink--no-decoration">
      <div className="logo">
        <Tag>Chat Packer</Tag>
        <img className={`logo__img ${isSmall ? "logo--small" : ""}`} src="/logo.svg" alt="logo" />
      </div>
    </Link>
  );
}
