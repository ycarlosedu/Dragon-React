import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { InputComponent, InputDiv } from './styles';
import { ReactComponent as ViewIcon } from '../../assets/icons/view-on.svg';
import { ReactComponent as ViewOffIcon } from '../../assets/icons/view-off.svg';

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
  name,
}) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string | undefined>(type);

  useEffect(() => {
    value === '' || value === undefined
      ? setIsFilled(false)
      : setIsFilled(true);
  }, [value]);

  return (
    <InputDiv isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor={label}>{label}</label>
      <InputComponent
        id={label}
        required={required}
        value={value}
        type={inputType}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {name === 'password' && inputType === 'password' ? (
        <ViewIcon color="#000" onClick={() => setInputType('text')} />
      ) : name === 'password' && inputType === 'text' ? (
        <ViewOffIcon color="#000" onClick={() => setInputType('password')} />
      ) : null}
    </InputDiv>
  );
};

export default Input;
