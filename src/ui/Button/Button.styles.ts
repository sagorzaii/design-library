import styled, { css } from "styled-components";
import { getGlobalStyles } from "../../utils/getGlobalCSS";
const style = getComputedStyle(document.body);

interface ButtonCSSProps {
  buttonType: "primary" | "success" | "danger" | "warning";
  size?: "sm" | "md" | "bg";
  isOutline?: boolean;
  border?: "squared" | "curved" | "rounded";
  isDisabled?: boolean;
}

const getOutlineColor = (style?: string) => {
  switch (style) {
    case "success":
      return css`
        border: 1px solid ${getGlobalStyles("--success-color")};
        background-color: var(--bg-color);
      `;
    case "danger":
      return css`
        border: 1px solid ${getGlobalStyles("--error-color")};
        background-color: var(--bg-color);
      `;
    case "warning":
      return css`
        border: 1px solid ${getGlobalStyles("--warning-color")};
        background-color: var(--bg-color);
      `;
    case "primary":
      return css`
        border: 1px solid ${getGlobalStyles("--primary-color")};
        background-color: var(--bg-color);
      `;
    default:
      break;
  }
};

const getBackgroundColor = (style?: string, isOutline?: boolean) => {
  if (isOutline) return getOutlineColor(style);
  else {
    switch (style) {
      case "success":
        return css`
          background: ${getGlobalStyles("--success-color")};
        `;
      case "danger":
        return css`
          background: ${getGlobalStyles("--error-color")};
        `;
      case "warning":
        return css`
          background: ${getGlobalStyles("--warning-color")};
        `;
      case "primary":
        return css`
          background: ${getGlobalStyles("--primary-color")};
        `;
      default:
        return css`
          background: linear-gradient(135deg, var(--light-grey), #eeeeeeff);
        `;
    }
  }
};

const getLabelColor = (style?: string, isOutline?: boolean) => {
  if (isOutline) {
    switch (style) {
      case "success":
        return getGlobalStyles("--success-color");
      case "danger":
        return getGlobalStyles("--error-color");
      case "warning":
        return getGlobalStyles("--warning-color");
      case "primary":
        return getGlobalStyles("--primary-color");
      default:
        return getGlobalStyles("--white");
    }
  }
  return getGlobalStyles("--white");
};

const getHoveredBackgroundColor = (style?: string) => {
  switch (style) {
    case "success":
      return css`
        background: linear-gradient(
          135deg,
          ${getGlobalStyles("--success-color")},
          #059669df
        );
      `;
    case "danger":
      return css`
        background: linear-gradient(
          135deg,
          ${getGlobalStyles("--error-color")},
          #dc2626df
        );
      `;
    case "warning":
      return css`
        background: linear-gradient(
          135deg,
          ${getGlobalStyles("--warning-color")},
          #fcd34ddf
        );
      `;
    case "primary":
      return css`
        background: linear-gradient(
          135deg,
          ${getGlobalStyles("--primary-color")},
          #1e3a8adf
        );
      `;
    default:
      return css`
        background: linear-gradient(135deg, var(--light-grey), #eaeaeaff);
      `;
  }
};

export const ButtonWrapper = styled.button<ButtonCSSProps>`
  display: block;
  width: 100%;
  height: 38px;
  border: none;
  border-radius: var(--curved);
  padding: 10px 30px;
  box-shadow: 1px 1px 2px var(--shadow-color);
  transition: margin-right 4s ease-in-out 1s;
  cursor: pointer;

  & > header {
    max-width: 80%;
    text-align: center;
    font-weight: var(--bold-fw);
    font-size: var(--button-fs);
    color: ${(props) => getLabelColor(props.buttonType, props.isOutline)};
  }

  /* background */
  ${(props) => getBackgroundColor(props.buttonType, props.isOutline)}

  /* size */
  max-width: ${(props) => props.size === "sm" && "150px"};
  max-width: ${(props) => props.size === "md" && "350px"};

  /* disabled */
  opacity: ${(props) => props.isDisabled === true && "0.5"};
  cursor: ${(props) => props.isDisabled === true && "not-allowed"};
  pointer-events: ${(props) => props.isDisabled === true && "none"};

  /* border radius */
  border-radius: ${(props) => props.border === "rounded" && "50px"};
  border-radius: ${(props) => props.border === "squared" && "unset"};

  /* &:hover header {
    color: ${(props) =>
    props.buttonType != "primary" && getGlobalStyles("--white")};
  } */

  &:hover {
    ${(props) => getHoveredBackgroundColor(props.buttonType)}
  }
  &:hover > header {
    color: ${(props) => getLabelColor(props.buttonType)};
  }
`;
