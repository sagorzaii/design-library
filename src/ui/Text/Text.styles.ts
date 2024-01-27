import styled from "styled-components";
import { getGlobalStyles } from "../../utils/getGlobalCSS";
const style = getComputedStyle(document.body);

interface TextCSSProps {
  type?: "primary" | "secondary" | "success" | "warning" | "error";
  isHighlighted?: boolean;
  textDecoration?: "strike" | "underline";
  isBold?: boolean;
  isItalic?: boolean;
  isDisabled?: boolean;
}

export const Paragraph = styled.p<TextCSSProps>`
  width: fit-content;
  text-align: left;
  font-family: var(--primary-ff);
  font-size: var(--body-fs);
  font-weight: var(--light-fw);
  color: var(--black);

  /* color */
  color: ${(props) =>
    props.type === "secondary" && getGlobalStyles("--secondary-color")};
  color: ${(props) =>
    props.type === "success" && getGlobalStyles("--success-color")};
  color: ${(props) =>
    props.type === "warning" && getGlobalStyles("--warning-color")};
  color: ${(props) =>
    props.type === "error" && getGlobalStyles("--error-color")};

  /* highlight color */
  background-color: ${(props) =>
    props.isHighlighted && getGlobalStyles("--highlight")};

  /* text deco */
  text-decoration: ${(props) =>
    props.textDecoration === "underline" && "underline"};
  text-decoration: ${(props) =>
    props.textDecoration === "strike" && "line-through"};

  /* font */
  font-style: ${(props) => props.isItalic && "italic"};
  font-weight: ${(props) => props.isBold && getGlobalStyles("--bold-fw")};
`;

export const KeyboardText = styled.kbd`
  width: fit-content;
  font-size: var(--body-fs);
  font-weight: var(--light-fw);
  font-family: var(--code-ff);
  color: var(--black);
  border-radius: 3px;
  border: 1px solid black;
  padding: 1px 2px 0;
`;

export const CodeText = styled.code`
  width: fit-content;
  font-size: var(--body-fs);
  font-weight: var(--light-fw);
  font-family: var(--code-ff);
  color: var(--black);
  background-color: var(--light-grey);
  border-radius: 3px;
  padding: 0 3px;
`;

export const Link = styled.a<TextCSSProps>`
  color: var(--secondary-color);
  font-family: var(--primary-ff);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  /* disabled */
  opacity: ${(props) => props.isDisabled === true && "0.5"};
  cursor: ${(props) => props.isDisabled === true && "not-allowed"};
  pointer-events: ${(props) => props.isDisabled === true && "none"};
`;
