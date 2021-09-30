import React from "react";

function Page(props) {
  const {
    bg = "white",
    text,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = props;
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="PageContainer"
      style={{ backgroundColor: bg }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="PageContainerTextContainer">{text}</h1>
      </div>
    </div>
  );
}

export default Page;
