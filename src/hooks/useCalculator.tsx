import {useState, useRef} from 'react';

enum Operators {
  'plus',
  'minus',
  'multiply',
  'divide',
}

export const useCalculator = () => {
  const [pastValue, setPastValue] = useState('0');
  const [value, setValue] = useState('0');
  const lastOperator = useRef<Operators>();

  const handelErase = () => {
    setValue('0');
    setPastValue('0');
  };

  const handleNumber = (pressedNumber: string) => {
    //max length
    if (value.length <= 12 && value !== 'Syntax Error') {
      //no 000...
      if (value === '0' && pressedNumber === '0') {
        return;
      }
      //no double dots
      if (value.includes('.') && pressedNumber === '.') {
        return;
      }
      //change number
      if (value === '0' && !pressedNumber.includes('.')) {
        setValue(pressedNumber);
        return;
      }
      setValue(value + pressedNumber);
    }
  };

  const handleSign = () => {
    //denie change on 0
    if (value !== '0') {
      const newValue = Number(value) * -1;
      setValue(newValue.toString());
    }
  };

  const handleDelete = () => {
    //avoid delete 0 and make 1 digit 0
    if (value === '0' || value.length === 1) {
      setValue('0');
    } else {
      setValue(value.slice(0, -1));
    }
  };

  const interchangeNumbers = () => {
    //avoid save end .
    if (value.endsWith('.')) {
      setPastValue(value.slice(0, -1));
    } else {
      setPastValue(value);
    }
    setValue('0');
  };

  const btnDivide = () => {
    interchangeNumbers();
    lastOperator.current = Operators.divide;
  };
  const btnMultiply = () => {
    interchangeNumbers();
    lastOperator.current = Operators.multiply;
  };
  const btnMinus = () => {
    interchangeNumbers();
    lastOperator.current = Operators.minus;
  };
  const btnPlus = () => {
    interchangeNumbers();
    lastOperator.current = Operators.plus;
  };

  const handleEquals = () => {
    const num1 = Number(value);
    const num2 = Number(pastValue);
    let result = 0;
    switch (lastOperator.current) {
      case Operators.plus:
        result = num1 + num2;
        setValue(result.toString());
        break;

      case Operators.minus:
        result = num2 - num1;
        setValue(result.toString());
        break;

      case Operators.multiply:
        result = num1 * num2;
        setValue(result.toString());
        break;

      case Operators.divide:
        if (num1 === 0 || value === 'Syntax Error') {
          setValue('Syntax Error');
          setPastValue('0');
        } else {
          result = num2 / num1;
          setValue(result.toString());
        }
        break;
    }
    setPastValue('0');
  };

  return {
    value,
    pastValue,
    handelErase,
    handleDelete,
    handleEquals,
    handleNumber,
    handleSign,
    btnDivide,
    btnMinus,
    btnMultiply,
    btnPlus,
  };
};
