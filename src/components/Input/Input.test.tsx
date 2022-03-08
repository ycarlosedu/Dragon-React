import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('should render Input correctly', () => {
    let value = '';
    const labelName = 'name';
    const onChange = (newValue: string) => {
      value = newValue;
    };
    const { rerender } = render(
      <Input label={labelName} onChange={onChange} value={value} />,
    );

    const label = screen.getByTestId('label');
    const input = screen.getByLabelText(labelName);
    expect(label.textContent).toBe(labelName);
    expect(input.id).toBe(labelName);

    fireEvent.change(input, { target: { value: 'matt' } });

    rerender(<Input label={labelName} onChange={onChange} value={value} />);

    //@ts-ignore
    expect(input.value).toBe('matt');
  });
});
