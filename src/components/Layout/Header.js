import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Header = React.memo((props) => {
  const { homeBtnWasClicked } = props;
  return (
    <div className="Header">
      <FontAwesomeIcon
        color="black"
        onClick={homeBtnWasClicked}
        icon={faHome}
        size="2x"
        style={{ padding: "10px 20px" }}
      />
    </div>
  );
});
