import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizontalLine";
import GoogleLogoImg from "../assets/images/ico_login_google.svg";

const SignUpModal = ({ show, onHide }) => {
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
              <Form.Control type="password" placeholder="비밀번호" />
              <Form.Control type="password" placeholder="비밀번호 확인" className="my-2" />
            </Form.Group>
            <Button block type="button" className="social-btn my-3">
              회원가입
            </Button>
            <HorizontalLine text={"OR"} />
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <Button block type="button" className="social-btn" onClick={renderProps.onClick}
                  ><img src={GoogleLogoImg} alt="GOOGLE_LOGIN"/> 구글 로그인
                  </Button>
                );
              }}
            />
            
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;