import React from "react";
import styled from "styled-components";
import { svgs} from "../assets";
import { Inp } from "./form/input";

const Nav = styled.nav`
  width: 100%;
  background: #fff;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 0.2rem 1rem;
  box-shadow: 4px 0px 16px 10px rgba(30, 30, 30, 0.08);

  & > div:nth-of-type(1) {
    display: none;
  }

  & > div:nth-of-type(2) {
    flex: 1;
    padding: 0em 0.6rem;
  }

  & > div:last-of-type {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 1rem;
    gap: 0.4rem;
  }

  @media (max-width: 550px) {
    & > div:nth-of-type(1) {
      display: block;
    }
  }
`;

const Icon = styled.div`
  padding: 0.2rem 0.5rem;
  background: #eff3f9;
  border-radius: 2px;
`;

interface Props {
  showSidebar: boolean;
  setShowSidebar: any;
  searchCompany: any;
  setSearchCompany: any;
  handleSearch: any;
}

export const Navbar: React.FC<Props> = ({
  showSidebar,
  setShowSidebar,
  searchCompany,
  setSearchCompany,
  handleSearch,
}) => {
  return (
    <>
      <Nav>
        <div onClick={() => setShowSidebar(!showSidebar)}>
          <img src={svgs.building} alt="" />
        </div>
        <div>
          <Inp
            searchCompany={searchCompany}
            setSearchCompany={setSearchCompany}
            handleSearch={handleSearch}
            placeholder="Search by account name or website"
          />
        </div>
        <div>
          <Icon>
            <img src={svgs.bell} alt="" />
          </Icon>
          <img src={svgs.dp} alt="" />
        </div>
      </Nav>
    </>
  );
};
