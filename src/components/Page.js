import React from "react";

const Page = React.memo((props) => {
  const { handleTouchStart, handleTouchMove, handleTouchEnd, style } = props;
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="PageContainer"
      style={{ ...style }}
    >
      {props.children}
    </div>
  );
});

export default Page;
