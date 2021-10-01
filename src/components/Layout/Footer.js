import React from "react";

export const Footer = React.memo(() => {
  return (
    <div className="Footer">
      <p className="truncate">{` © ${new Date().getFullYear()} Suncrypt Workflow `}</p>
      <img className="FooterImg" src="/pirateparrot.gif" alt="pirate" />
    </div>
  );
});
