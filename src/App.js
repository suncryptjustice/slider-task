import React from "react";
import MainSlider from "./components/MainSlider";
import Page from "./components/Page";
import Layout from "./components/Layout";

function App() {
  const [activePage, setActivePage] = React.useState(0);

  const handleHomeBtnClicked = () => {
    setActivePage(0);
  };

  const handlePageChange = (index) => {
    setActivePage(index);
  };

  return (
    <Layout homeBtnWasClicked={handleHomeBtnClicked}>
      <MainSlider pageChange={handlePageChange} activePage={activePage}>
        <Page text="First" bg="red" on />
        <Page text="Second" bg="teal" />
        <Page text="Third" bg="yellow" />
      </MainSlider>
    </Layout>
  );
}

export default App;
