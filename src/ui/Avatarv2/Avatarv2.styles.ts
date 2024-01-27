import * as Avatar from "@radix-ui/react-avatar";
import styled from "styled-components";

const getAvatarContainerSize = (size: UISizes) => {
  switch (size) {
    case "sm":
      return "25px";
    case "lg":
      return "100px";
    case "md":
    default:
      return "50px";
  }
};

const getAvatarIconSize = (size: UISizes) => {
  switch (size) {
    case "sm":
      return "10px";
    case "lg":
      return "55px";
    case "md":
    default:
      return "25px";
  }
};

const getInitialFontSize = (size: UISizes) => {
  switch (size) {
    case "sm":
      return "var(--button-fs)";
    case "lg":
      return "var(--hTwo-fs)";
    case "md":
    default:
      return "var(--body-fs)";
  }
};

const getBorderRadius = (borderRadius: BorderRadius) => {
  switch (borderRadius) {
    case "rounded":
      return "4px";
    case "circled":
      return "50%";
    case "squared":
    default:
      return "0px";
  }
};

export const AvatarRoot = styled(Avatar.Root)<{
  size: UISizes;
  borderRadius?: BorderRadius;
}>`
  width: ${(prop) => getAvatarContainerSize(prop.size)};
  height: ${(prop) => getAvatarContainerSize(prop.size)};
  border-radius: ${(prop) =>
    prop?.borderRadius && getBorderRadius(prop.borderRadius)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--light-grey);
  background-color: var(--light-grey);
  box-shadow: 0.2px 0.2px 2px var(--shadow-color);
  margin: 10px;

  img {
    color: var(--shadow-color);
    border-radius: ${(prop) =>
      prop?.borderRadius && getBorderRadius(prop.borderRadius)};
  }
`;

export const AvatarFallback = styled(Avatar.Fallback)<{
  size: UISizes;
  borderRadius?: BorderRadius;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: calc(${(prop) => getInitialFontSize(prop.size)});
  svg {
    color: var(--shadow-color);
    width: ${(prop) => getAvatarIconSize(prop.size)};
    height: ${(prop) => getAvatarIconSize(prop.size)};
  }
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
