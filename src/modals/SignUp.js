import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import PasswordStrengthMeter from '../components/passwordcheck';


const SignUpModal = ({ show, onHide }) => {
  const [ password, setPassword ] = useState('');
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>이름</Form.Label>
              <Form.Control placeholder="이름" />
            </Form.Group>

            <Form.Group>
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control name="user-password" type="password" onChange={e => setPassword(e.target.value)}/>
              <PasswordStrengthMeter password={password} />
            </Form.Group>
            <Button block type="button" className="social-btn my-3">
              회원가입
            </Button>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;