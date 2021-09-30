import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Header(props) {
  const { homeBtnWasClicked } = props;
  return (
    <div className="Header">
      <FontAwesomeIcon
        color="white"
        onClick={homeBtnWasClicked}
        icon={faHome}
        size="2x"
        style={{ padding: "10px 20px" }}
      />
    </div>
  );
}

export default Header;
