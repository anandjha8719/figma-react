import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { svgs } from "../assets";
import { Button } from ".";

const Container = styled.div`
  padding: 2rem 3rem;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    gap: 4rem;
  }

  @media (max-width: 550px) {
    padding: 0.5rem 1rem;

    & > div {
      flex-flow: column-reverse nowrap;
      gap: 0rem;
    }
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #000000;

  opacity: 0.5;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  min-width: 300px;

  & > div:nth-of-type(2) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 1rem;
  }
`;

const TrackingButton = styled(Button)<{
  status: string;
}>`
  display: inline-flex;
  gap: 0.5rem;

  & > svg {
    display: ${(props) => (props.status === "tracking" ? "block" : "none")};
  }

  ${(props) =>
    props.status === "tracked"
      ? `
    color: green; border-color: green; 
    `
      : ``}
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0em;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;

  @media (max-width: 500px) {
    display: inline-flex;
    gap: 1rem;
  }
`;

const Li = styled.li`
  padding: 0.7rem 0rem;

  & > a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    
  }

  @media (max-width: 550px) {
    & > a {
      white-space: nowrap;
      background: #f7f7f7;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border: 2px solid #d9d9d9;
      }
    }
  }
`;

const AltLogo = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 2px;
  font-size: 1.5rem;
  background-color: #ff6059;
  color: #fff;
`;

interface Props {
  result: [] | any[];
  setResult: any;
}

const Dashboard: React.FC<Props> = ({ result, setResult }) => {
  const handleTrack = (index: number, companyName: string, slug: string) => {
    //  createing a new arr
    let newResult = [...result];
    newResult[index] = { ...newResult[index], status: "tracking" };
    setResult(newResult);

    // mimic the response wait from the server
    setTimeout(() => {
      let newResult = [...result];

      newResult[index] = { ...newResult[index], status: "tracked" };

      setResult(newResult);
      console.log(
        `${companyName} (${slug}) tracked at ${new Date().toTimeString()}`
      );
    }, 1000);
  };

  return (
    <Container>
      <div>
        <div style={{ flex: "2" }}>
          <Heading>Similar Accounts</Heading>
          <CardContainer>
            {result.map((company, index) => (
              <Card key={index}>
                <div>
                  {company.logo ? (
                    <Img src={company.logo} alt="" />
                  ) : (
                    <AltLogo>{svgs.dp}</AltLogo>
                  )}
                </div>
                <div>
                  <div>
                    <div>{company.company}</div>
                    <div>{company.website}</div>
                  </div>
                  <div>
                    <TrackingButton
                      status={company.status}
                      type="button"
                      onClick={() =>
                        handleTrack(index, company.company, company.slug)
                      }
                    >
                     
                      {company.status === "tracked" ? "Tracking" : "Track"}
                    </TrackingButton>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
        </div>
        <div style={{ flex: "1" }}>
          <Heading>Quick Action</Heading>
          <Ul>
            <Li>
              <a href="#">Track new Account</a>
            </Li>
            <Li>
              <a href="#">Bulk Track accounts</a>
            </Li>
            <Li>
              <a href="#">Manage Accounts</a>
            </Li>
          </Ul>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
