import React from 'react';
import './SharedInput.css';

interface SharedInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  placeholder?: string;
  value?: string;
  disabledValue?: string;
  onButtonClick?: () => void;
}

const SharedInput: React.FC<SharedInputProps> = ({ label, placeholder, onButtonClick, value, disabledValue}) => {
  return (
    <div className="shared-input-container">
      {label && <label className="shared-input-label">{label}</label>}
      <div className="inputs-container">
        <div className="shared-input-wrapper">
          <input className="shared-input" type="text" placeholder={placeholder} value={value}/>
          <button className="shared-input-button" onClick={onButtonClick}>...</button>
        </div>
        <div className="disabled-input-wrapper">
          <input className="disabled-input" type="text" value={disabledValue} disabled />
        </div>
      </div>
    </div>
  );
};

export default SharedInput;
