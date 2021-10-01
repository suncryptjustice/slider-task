import React from "react";
import pirate from "../../assets/pirate.gif";

export const Footer = React.memo(() => {
  return (
    <div className="Footer">
      <p className="truncate">{` © ${new Date().getFullYear()} Suncrypt Workflow `}</p>
      <img className="FooterImg" src={`.${pirate}`} alt="pirate" />
    </div>
  );
});
