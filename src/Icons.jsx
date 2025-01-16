import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconContent({ icon, content, style, size }) {
  return (
    <>
      <div className={style}>
        <FontAwesomeIcon icon={icon} size={size} />
        <p> {content}</p>
      </div>
    </>
  );
}

export default IconContent;
