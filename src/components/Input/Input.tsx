import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { InputComponent, InputDiv } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  value,
  required,
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    value === '' || value === undefined
      ? setIsFilled(false)
      : setIsFilled(true);
  }, [value]);

  return (
    <InputDiv isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor="">{label}</label>
      <InputComponent
        required={required}
        value={value}
        type={type}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputDiv>
  );
};

export default Input;
