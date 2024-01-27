import styled from "styled-components";
import { getGlobalStyles } from "../../utils/getGlobalCSS";

export const getBorderRadius = (borderRadius: BorderRadius) => {
  switch (borderRadius) {
    case "circled":
      return getGlobalStyles("--circled");
    case "rounded":
      return getGlobalStyles("--curved");
    case "squared":
    default:
      return;
  }
};

export const InputWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

export const Label = styled.label`
  width: fit-content;
  max-width: 100px;
  margin: 0px 5px;
  text-align: left;
  overflow-wrap: break-word;
  color: var(--secondary-color);
  font-size: var(--label-fs);
  font-weight: var(--semi-bold-fw);
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 12px;
  margin: 5px 0px;
  border: 1px solid var(--secondary-color);
  border-radius: var(--rounded);
  color: var(--black);
  font-size: var(--body-fs);
  font-weight: var(--medium-fw);

  :focus {
    outline: none;
  }
  /* Firefox */
  ::placeholder {
    color: var(--secondary-color);
    opacity: 1;
  }
  /* Edge 12 -18 */
  ::-ms-input-placeholder {
    color: var(--secondary-color);
  }
`;
