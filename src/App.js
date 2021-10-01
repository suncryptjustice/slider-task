import React from "react";
import MainSlider from "./components/MainSlider";
import Page from "./components/Page";
import Layout from "./components/Layout/Layout";

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
            src="/undraw_happy_music_g6wc.svg"
            alt="bird listen music"
          />
        </Page>
        <Page style={{ backgroundColor: "teal" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src="/undraw_instruction_manual_cyae.svg"
            alt="interior"
          />
        </Page>
        <Page style={{ backgroundColor: "orange" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src="/undraw_refreshing_beverage_td3r.svg"
            alt="juice"
          />
        </Page>
        <Page style={{ backgroundColor: "purple" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src="/undraw_xmas_surprise_57p1.svg"
            alt="gift"
          />
        </Page>
      </MainSlider>
    </Layout>
  );
}

export default App;
