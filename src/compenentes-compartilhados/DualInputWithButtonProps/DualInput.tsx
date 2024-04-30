  import React from 'react';
  import './DualInput.css'

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
      <div className="container-pai" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="conteiner-filho1" style={{ marginRight: '' }}>
          <label className="label01" htmlFor={name1}>{label1}</label>
          <div className='styleLabel01' style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="input-01"
              style={{ width: '150px', marginRight: '-10px' }}
              id={name1}
              name={name1}
              placeholder={placeholder1}
              aria-label={placeholder1}
            />
            <button
              type="button"
              className="btn-input1"
              style={{ backgroundColor: 'gray', width: '25px' }}
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="conteiner-filho2">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label02" htmlFor={name2}>{label2}</label>
            <input
              type="text"
              className="input-02"
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