/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_MAP = {
  large: { "--height": "16px", "--borderRadius": "8px", "--padding": "4px" },
  medium: { "--height": "12px", "--borderRadius": "4px" },
  small: { "--height": "8px", "--borderRadius": "4px" },
};

const BAR_WIDTH = 370;

const ProgressBar = ({ value, size }) => {
  const availWidth = size === "large" ? BAR_WIDTH - 8 : BAR_WIDTH;
  const borderRadiusRight =
    value === 99
      ? Number.parseInt(SIZE_MAP[size]["--borderRadius"]) / 2 + "px"
      : value === 100
      ? SIZE_MAP[size]["--borderRadius"]
      : "0px";

  const outerStyle = SIZE_MAP[size];
  const innerStyle = {
    "--width": (+value / 100) * availWidth + "px",
    "--borderRadiusLeft": SIZE_MAP[size]["--borderRadius"],
    "--borderRadiusRight": borderRadiusRight,
  };

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <OuterBar style={outerStyle}>
        <InnerBar style={innerStyle} />
      </OuterBar>
      <strong>{value}</strong>
    </div>
  );
};

const OuterBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: ${BAR_WIDTH + "px"};
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
  border-top-left-radius: var(--borderRadiusLeft);
  border-bottom-left-radius: var(--borderRadiusLeft);
  border-top-right-radius: var(--borderRadiusRight);
  border-bottom-right-radius: var(--borderRadiusRight);
`;

export default ProgressBar;
