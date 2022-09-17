import React from "react";
import styled from "styled-components";

interface ComponentProps {}

export const Button = styled.button<ComponentProps>`
  border: 2px solid #ff6059;
  color: #ff6059;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 2px;
  background: #fff;
  cursor: pointer;
`;
