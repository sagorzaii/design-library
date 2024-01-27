import styled from "styled-components";
import { DisabledState } from "../../../ui/Shared.styles";
import { getGlobalStyles } from "../../../utils/getGlobalCSS";
import { InputToggleTheme } from "./InputToggle";

const getBackgroundColor = (customColor: string, theme: InputToggleTheme) => {
  if (customColor !== "") {
    return customColor;
  } else {
    switch (theme) {
      case "success":
        return getGlobalStyles("--success-color");
      case "danger":
        return getGlobalStyles("--error-color");
      case "primary":
      default:
        return getGlobalStyles("--primary-color");
    }
  }
};

export const InputWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Switch = styled.span<{ isDisabled: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--light-grey);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: var(--circled);
  ${({ isDisabled }) => isDisabled && DisabledState}

  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--white);
    box-shadow: 0.5px 0.5px 1px var(--shadow-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const InputToggle = styled.input<{
  color: string;
  theme: InputToggleTheme;
}>`
  opacity: 0;
  width: 0;
  height: 0;
  user-select: none;

  &:checked + ${Switch} {
    background-color: ${(props) =>
      getBackgroundColor(props.color, props.theme)};
  }

  &:checked + ${Switch}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
