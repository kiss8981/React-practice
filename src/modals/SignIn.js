import React, { useState } from "react";
import { Modal, Button, Form, Container, Alert } from "react-bootstrap";
import naverImg from '../img/naver.png'
import SignUpModal from '../modals/SignUp'

const SignInModal = ({ show, onHide }) => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  return (
    <Modal show={show}  onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)}/>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="FormUser">
            <Alert variant="danger">
                <i class="fas fa-exclamation-circle"></i>백엔드 서버 개발중입니다!
            </Alert>
            <Form.Group>
                <Form.Label><i class="fas fa-envelope"/> 이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일"/>
            </Form.Group>

            <Form.Group>
                <Form.Label><i class="fas fa-lock"/> 비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호"/>
            </Form.Group>
            <Button block type="button" className="social-btn my-3">
            <i class="fas fa-sign-in-alt"></i>&nbsp; 로그인
            </Button>
            <Button type="button" className="social-btn mr-1">
            <i class="fab fa-google"></i>&nbsp;구글
            </Button>
            <Button type="button" className="social-btn ml-1">
            <img src={naverImg} alt="naverIMG" className="fab" style={{maxWidth: "15px", maxHeight: "15px", marginBottom: "4.5px" }}/>&nbsp;네이버
            </Button>
            <hr></hr>
            <Button block type="button" style={{border: "none", textDecoration: "underline"}} onClick={() => setSignUpModalOn(true)} className="signup-btn">
              이메일로 가입하기
            </Button>
            </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;