/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ExpoCheckbox from 'expo-checkbox';

interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  value,
  onValueChange,
  disabled = false,
}) => {
  return (
    <ExpoCheckbox
      style={{
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 4,
      }}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    />
  );
};

export default Checkbox;
