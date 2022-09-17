import React, { useState } from "react";
import styled from "styled-components";
import { svgs } from "../../assets";

const Container = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  display: grid;
  place-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 2.5rem;
  border: none;
  font-family: "Manrope", sans-serif;

  &::placeholder {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    color: #e8e8e8;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  &:focus {
    outline: none;
  }
`;

interface Props {
  searchCompany: any;
  setSearchCompany: any;
  handleSearch: any;
  placeholder: string;
}

export const Inp: React.FC<Props> = ({
  searchCompany,
  setSearchCompany,
  handleSearch,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCompany(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Container>
      <Input
        value={searchCompany}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Icon>
        {searchCompany ? (
          <img
            onClick={() => {
              setSearchCompany("");
            }}
            src={svgs.times}
            alt=""
          />
        ) : (
          <img src={svgs.search} alt="" />
        )}
      </Icon>
    </Container>
  );
};
