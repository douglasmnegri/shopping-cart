import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconContent({ icon, content, style }) {
  return (
    <>
      <div className={style}>
        <FontAwesomeIcon icon={icon} size="2xl" />
        <p> {content}</p>
      </div>
    </>
  );
}

export default IconContent;
