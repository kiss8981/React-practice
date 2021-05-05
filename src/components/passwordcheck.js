import React from 'react';
import zxcvbn from 'zxcvbn';
import { Form } from "react-bootstrap";


const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch(testResult.score) {
      case 0:
        return '매우 쉬움';
      case 1:
        return '쉬움';
      case 2:
        return '보통';
      case 3:
        return '강함';
      case 4:
        return '강력함';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })

  return (
    <>
      <Form.Label className="progress my-3" style={{ height: '7px' }} >
        <Form.Label className="progress-bar" style={changePasswordColor()}></Form.Label>
    </Form.Label>
      <Form.Label style={{ color: funcProgressColor() }}>{createPassLabel()}</Form.Label>
    </>
  )
}

export default PasswordStrengthMeter