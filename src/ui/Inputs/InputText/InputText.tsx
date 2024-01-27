import React from "react";
import * as S from "./InputText.styles";

export type InputTextProps = {
  isBlocked?: boolean;
  maxLength: number;
  minLength?: number;
} & InputProps;

const InputText = (props: InputTextProps) => {
  const {
    id,
    name,
    placeholder,
    defaultValue,
    value,
    label,
    isDisabled = false,
    isReadOnly = false,
    isBlocked = false,
    maxLength,
    minLength,
    borderRadius = "squared",
    onChange,
    onBlur,
    onFocus,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event.target.value);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event.target.value);
  };

  return (
    <S.InputTextWrapper isBlocked={isBlocked}>
      {label && <S.InputTextLabel htmlFor={id}>{label}</S.InputTextLabel>}
      <S.InputText
        id={id}
        name={name}
        type="text"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        isDisabled={isDisabled}
        readOnly={isReadOnly}
        maxLength={maxLength}
        minLength={minLength}
        borderRadius={borderRadius}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </S.InputTextWrapper>
  );
};

export default InputText;
