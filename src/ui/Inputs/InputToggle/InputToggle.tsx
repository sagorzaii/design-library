import React from "react";
import * as S from "./InputToggle.styles";

export type InputToggleTheme = "success" | "danger" | "primary";

export type InputToggleProps = {
  checked?: boolean;
  customColor?: string;
  theme?: InputToggleTheme;
  onClick?: (ev: React.MouseEvent<HTMLInputElement>) => void;
} & InputProps;

const InputToggle = (props: InputToggleProps) => {
  const {
    id,
    name,
    checked,
    customColor = "",
    theme = "primary",
    isDisabled = false,
    onClick,
  } = props;

  const handleOnChange = (event: React.MouseEvent<HTMLInputElement>) => {
    if (onClick) onClick(event);
  };

  return (
    <S.InputWrapper>
      <S.InputToggle
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        color={customColor}
        theme={theme}
        disabled={isDisabled}
        onClick={handleOnChange}
      />
      <S.Switch isDisabled={isDisabled} />
    </S.InputWrapper>
  );
};

export default InputToggle;
