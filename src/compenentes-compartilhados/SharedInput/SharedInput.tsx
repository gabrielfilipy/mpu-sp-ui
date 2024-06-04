import React from 'react';
import './SharedInput.css';

interface SharedInputProps {
  label?: string;
  placeholder?: string;
  onButtonClick?: () => void;
}

const SharedInput: React.FC<SharedInputProps> = ({ label, placeholder, onButtonClick }) => {
  return (
    <div className="shared-input-container">
      {label && <label className="shared-input-label">{label}</label>}
      <div className="inputs-container">
        <div className="shared-input-wrapper">
          <input className="shared-input" type="text" placeholder={placeholder} />
          <button className="shared-input-button" onClick={onButtonClick}>...</button>
        </div>
        <div className="disabled-input-wrapper">
          <input className="disabled-input" type="text" disabled />
        </div>
      </div>
    </div>
  );
};

export default SharedInput;
