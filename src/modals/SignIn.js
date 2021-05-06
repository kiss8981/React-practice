import React from "react";
import { Modal, Button, Form, Container, Alert } from "react-bootstrap";

const SignInModal = ({ show, onHide }) => {
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
          <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="FormUser">
            <Alert variant="danger">
                <i class="fas fa-exclamation-circle"></i>  백엔드 서버 개발중입니다!
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
            <i class="fas fa-user-circle"></i>&nbsp;네이버
            </Button>
            </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;