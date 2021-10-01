import React from "react";
import MainSlider from "./components/MainSlider";
import Page from "./components/Page";
import Layout from "./components/Layout/Layout";
import img1 from "./assets/1.svg";
import img2 from "./assets/2.svg";
import img3 from "./assets/3.svg";
import img4 from "./assets/4.svg";

function App() {
  const [activePage, setActivePage] = React.useState(0);

  const handleHomeBtnClicked = React.useCallback(() => {
    setActivePage(0);
  }, []);

  const handlePageChange = React.useCallback((index) => {
    setActivePage(index);
  }, []);

  return (
    <Layout homeBtnWasClicked={handleHomeBtnClicked}>
      <MainSlider pageChange={handlePageChange} activePage={activePage}>
        <Page style={{ backgroundColor: "red" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src={`.${img1}`}
            alt="bird listen music"
          />
        </Page>
        <Page style={{ backgroundColor: "teal" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src={`.${img2}`}
            alt="interior"
          />
        </Page>
        <Page style={{ backgroundColor: "orange" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src={`.${img3}`}
            alt="juice"
          />
        </Page>
        <Page style={{ backgroundColor: "purple" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src={`.${img4}`}
            alt="gift"
          />
        </Page>
      </MainSlider>
    </Layout>
  );
}

export default App;
