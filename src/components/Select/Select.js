import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <IconWrapper>
        <Icon id="chevron-down" size="24" />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  float: left;
  height: 43px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 0px;
  bottom: 0px;
  padding: 18px 0px 12px;
`;

const CustomSelect = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  height: 100%;
  width: 100%;
  padding: 12px 52px 12px 16px;
  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
