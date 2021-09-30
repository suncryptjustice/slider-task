import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <p>{` © ${new Date().getFullYear()} Suncrypt Workflow `}</p>
    </div>
  );
}

export default Footer;
