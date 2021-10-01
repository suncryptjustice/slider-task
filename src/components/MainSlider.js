import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import SliderSwitch from "./SliderSwitch";

const MainSlider = React.memo((props) => {
  const isMobile = useIsMobile();
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const scrollRef = React.useRef(null);

  const { activePage, pageChange } = props;

  const handleTouchStart = React.useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = React.useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    if (touchStart - touchEnd > 95) {
      activePage < React.Children.count(props.children) - 1 &&
        pageChange(activePage + 1);
    }
    if (touchStart - touchEnd < -95) {
      activePage > 0 && pageChange(activePage - 1);
    }
  }, [activePage, pageChange, touchEnd, touchStart, props.children]);

  const scrollToIndex = React.useCallback(
    (index = activePage) => {
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * index,
        behavior: "smooth",
      });
    },
    [activePage]
  );

  const resizeHandler = React.useCallback(() => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.offsetWidth * activePage,
      behavior: "smooth",
    });
  }, [activePage]);

  const handleDotWasClicked = React.useCallback(
    (value) => {
      pageChange(value);
    },
    [pageChange]
  );

  const keyPressHandler = React.useCallback(
    (e) => {
      if (e.keyCode === 37) {
        activePage > 0 && pageChange(activePage - 1);
      }
      if (e.keyCode === 39) {
        activePage < React.Children.count(props.children) - 1 &&
          pageChange(activePage + 1);
      }
    },
    [activePage, pageChange, props.children]
  );

  React.useLayoutEffect(() => {
    window.addEventListener("resize", resizeHandler);
    scrollToIndex();
    return () => window.removeEventListener("resize", resizeHandler);
  }, [scrollToIndex, resizeHandler]);

  React.useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return (
    <div ref={scrollRef} className="MainSlider">
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          handleTouchStart: handleTouchStart,
          handleTouchMove: handleTouchMove,
          handleTouchEnd: handleTouchEnd,
        })
      )}
      {!isMobile && (
        <SliderSwitch
          length={React.Children.count(props.children)}
          activePage={activePage}
          dotWasClicked={handleDotWasClicked}
        />
      )}
    </div>
  );
});

export default MainSlider;
