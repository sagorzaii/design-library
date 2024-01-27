import React from "react";
import * as Shared from "../SharedInput.styles";
import * as S from "./InputCheckbox.styles";

export type InputCheckboxProps = {
  checked?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLInputElement>) => void;
  label: string;
} & InputProps;

const InputCheckbox = (props: InputCheckboxProps) => {
  const { id, name, value, checked, label, isDisabled, isReadOnly, onClick } =
    props;

  const handleOnChange = (event: React.MouseEvent<HTMLInputElement>) => {
    if (onClick) onClick(event);
  };

  return (
    <Shared.InputWrapper>
      <S.InputCheckbox
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        value={value}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onClick={handleOnChange}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </Shared.InputWrapper>
  );
};

export default InputCheckbox;
