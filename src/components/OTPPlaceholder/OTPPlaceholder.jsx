import axios from 'axios';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './OTPPlaceholder.css';

export const OTPPlaceholder = ({
  active = false,
  size = 'medium',
  backgroundColor,
  label,
  placeholder,
  regionCode,
  ...props
}) => {
  const mode = active ? 'flip-card--active' : 'flip-card--inactive';
  const [data, setData] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cipher, setCipher] = useState('');
  const [flip, setFlip] = useState('placeholder');

  const startVerify = async () => {
    await axios
      .get('http://localhost:3000/verify/getcode', {
        params: {
          ver: phoneNumber,
        },
      })
      .then((res) => {
        console.log(phoneNumber);
        setFlip('flip-card');
        return setData(res.data.results);
      });
  };

  const checkVerify = async () => {
    await axios
      .get('http://localhost:3000/verify/verifycode', {
        params: {
          ver: phoneNumber,
          cipher: cipher,
        },
      })
      .then((res) => {
        window.open(
          `https://kudoku.typeform.com/to/Aq7EqLjd#wa=${phoneNumber}`,
          '_blank'
        );
        console.log(phoneNumber);
        console.log(res.data.results);
        // return setData(res.data.results)
      });
  };

  const handleStartVerify = (event) => {
    event.preventDefault();
    startVerify();
  };
  const handleCheckVerify = (event) => {
    event.preventDefault();
    checkVerify();
  };
  if (!active) {
    return (
      <div className={`flip-card`}>
        <div className="flip-card-inner">
          <div className="flip-card--inactive">
            <div className="input-phoneNumber">
              <div className="regionCode">{regionCode}</div>
              <input
                type="number"
                className="numberInput"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder={placeholder}
              />
              <button type="button" className="try" onClick={handleStartVerify}>
                {label}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`placeholder`}>
        <div className="flip-card-inner">
          <div className="flip-card--active">
            <div className="input-otp">
              <OtpInput
                value={cipher}
                onChange={setCipher}
                numInputs={6}
                separator={<span className="separator"></span>}
                inputStyle="box"
                shouldAutoFocus
              />
              <button
                type="button"
                className="tryVerify"
                onClick={handleCheckVerify}
              >
                {label}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
