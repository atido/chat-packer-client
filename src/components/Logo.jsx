import "./Logo.css";

export default function Logo({ isSmall }) {
  const Tag = isSmall ? "h3" : "h1";
  return (
    <div className="logo">
      <Tag>Chat Packer</Tag>
      <img className={`logo__img ${isSmall ? "logo--small" : ""}`} src="/logo.svg" alt="logo" />
    </div>
  );
}
