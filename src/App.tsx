// @ts-ignore
import logo from "./logo.svg";
import { Input, Navbar, Sidebar } from "./components";
import { svgs } from "./assets";
// @ts-ignore
import styled from "styled-components";
import React, { useState } from "react";
import Dashboard from "./components/dashboard";
import axios from "axios";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  grid: [stack] 1fr / minmax(min-content, 23%) [stack] 1fr;

  @media (max-width: 550px) {
    grid: [stack] 1fr / min-content [stack] 1fr;
    & > * {
      grid-area: stack;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchCompany, setSearchCompany] = useState("");
  const [result, setResult] = useState<[] | any[]>([]);

  const handleSearch = async (value: string) => {
    try {
      const res = await axios({
        url: `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${value}`,
        method: "GET",
      });

      setResult(res.data);
    } catch (e) {
      alert('no companies found or API error')
    }
  };

  return (
    <div>
      <HomeContainer>

        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div style={{ overflowY: "scroll" }}>
          <Navbar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            searchCompany={searchCompany}
            setSearchCompany={setSearchCompany}
            handleSearch={handleSearch}
          />

          {result.length == 0 ? (
            <>
              <Img src={svgs.hero_image} alt="" />
              <Img src={svgs.companies} alt="" />
              <Img src={svgs.two_persons} alt="" />
            </>
          ) : (
            <Dashboard result={result} setResult={setResult} />
          )}
        </div>
      </HomeContainer>
    </div>
  );
};

export default App;
