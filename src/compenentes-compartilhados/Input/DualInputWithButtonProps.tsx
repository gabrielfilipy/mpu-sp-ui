import React from 'react';

interface Props {
  buttonText: string;
  onButtonClick: () => void;
  label1: string;
  label2: string;
  name1: string;
  name2: string;
  placeholder1: string;
  placeholder2: string;
}

const DualInput = ({ buttonText, onButtonClick, label1, label2, name1, name2, placeholder1, placeholder2 }: Props) => {
  return (
    <div className="combined-input" style={{ display: 'flex', alignItems: 'center' }}>
      {/* Primeiro input com botão */}
      <div className="input-container" style={{ marginRight: '30px' }}>
        <label className="form-label input-label--top" htmlFor={name1}>{label1}</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            className="form-control input-element"
            style={{ width: '150px', marginRight: '-5px' }}
            id={name1}
            name={name1}
            placeholder={placeholder1}
            aria-label={placeholder1}
          />
          <button
            type="button"
            className="btn btn-secondary input-button"
            style={{ borderRadius: '3px' }}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Segundo input */}
      <div className="input-container">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="form-label input-label--top" htmlFor={name2}>{label2}</label>
          <input
            type="text"
            className="form-control input-element"
            style={{ width: '150px', marginRight: '-5px' }}
            id={name2}
            name={name2}
            placeholder={placeholder2}
            aria-label={label2}
          />
        </div>
      </div>
    </div>
  );
};

export default DualInput;