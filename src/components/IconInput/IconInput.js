import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_MAP = {
  small: "12px",
  large: "20px",
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZE_MAP = {
    small: {
      "--borderWidth": "1px",
      "--fontSize": "14px",
      "--width": width + "px",
    },
    large: {
      "--borderWidth": "2px",
      "--fontSize": "18px",
      "--width": width + "px",
    },
  };

  return (
    <Wrapper style={SIZE_MAP[size]}>
      <label for="search" style={{ height: 0, visibility: "hidden" }}></label>
      <Icon id={icon} size={ICON_MAP[size]} name="search" />
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-style: solid;
  border-bottom-width: var(--borderWidth);
  font-size: var(--fontSize);
  width: var(--width);
`;

const Input = styled.input`
  border: none;
  color: ${COLORS.gray700};
  font-weight: bold;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 4px;
  }
`;

export default IconInput;
