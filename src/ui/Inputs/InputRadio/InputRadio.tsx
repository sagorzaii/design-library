import React from "react";
import * as Shared from "../SharedInput.styles";
import * as S from "./InputRadio.styles";

export type InputRadioProps = {
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  squared?: boolean;
} & Omit<InputProps, "placeholder" | "borderRadius">;

const InputRadio = (props: InputRadioProps) => {
  const {
    id,
    name,
    value,
    checked,
    label,
    squared,
    isDisabled,
    isReadOnly,
    onChange,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <Shared.InputWrapper>
      <S.InputRadio
        id={id}
        name={name}
        type="radio"
        checked={checked}
        value={value}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleOnChange}
        isSquared={squared}
      />
      <Shared.Label htmlFor={id}>{label}</Shared.Label>
    </Shared.InputWrapper>
  );
};

export default InputRadio;
