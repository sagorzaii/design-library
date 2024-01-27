import styled from "styled-components";
import { getGlobalStyles } from "../../../utils/getGlobalCSS";
import { Input, InputWrapper, Label } from "../SharedInput.styles";

export const getAccentColor = (color?: string) => {
  if (color) return `accent-color: ${color}`;
  return `accent-color: ${getGlobalStyles("--primary-color")}`;
};

export const getSliderAppearance = (direction?: "horizontal" | "vertical") => {
  if (direction === "vertical") return "appearance: slider-vertical";
};

export const InputSliderWrapper = styled(InputWrapper)<{
  direction?: "horizontal" | "vertical";
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ direction }) => direction === "vertical" && "flex-direction: column;"}
`;

export const Slider = styled(Input)<{
  color?: string;
  direction?: "horizontal" | "vertical";
}>`
  width: 100%;
  padding: 0;
  cursor: grab;
  ${({ color }) => getAccentColor(color)};

  &[type="range"] {
    ${(props) => getSliderAppearance(props.direction)};
  }

  ${({ direction }) => direction === "vertical" && "height: 100%;"}
`;

export const LeftSliderLabel = styled(Label)``;

export const RightSliderLabel = styled(Label)``;
