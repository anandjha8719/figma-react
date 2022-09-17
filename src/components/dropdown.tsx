import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  & > div:nth-of-type(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    width: 100%;
    cursor: pointer;
  }

  & > div:nth-of-type(1) > div:nth-of-type(2) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-top: 0.5em;

  & > li {
    padding: 0.5rem 0em;
    opacity: 0.6;
  }
`;

interface Props {
  children: any;
  items: [] | any[];
}

export const Dropdown: React.FC<Props> = ({ children, items }) => {
  const [showContent, setShowContent] = useState(false);

  const handleDropdown = () => {
    setShowContent(!showContent);
  };

  return (
    <Container>
      <div onClick={handleDropdown}>{children}</div>
      <div>
        {showContent ? (
          <Ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Ul>
        ) : null}
      </div>
    </Container>
  );
};
