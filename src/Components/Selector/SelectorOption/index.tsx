import React from "react";

interface SelectOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const SelectOption = ({ value, label, ...props }: SelectOption) => {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
};

export default SelectOption;
