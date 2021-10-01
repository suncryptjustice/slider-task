import React from "react";

export const useIsMobile = () => {
  const [value, setValue] = React.useState();
  React.useLayoutEffect(() => {
    setValue(window.screen.width <= 800 || window.screen.height <= 600);
  }, []);
  return value;
};
