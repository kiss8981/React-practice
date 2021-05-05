import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizontalLine";

const responeGoogle = res => {
    console.log(res)
}

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
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            <Button block type="button" className="social-btn my-3">
              로그인
            </Button>
            <HorizontalLine />
            <GoogleLogin
              clientId="183101622325-9e3rckitc7jt7ienvkva4q92j1okkkel.apps.googleusercontent.com"
              onSuccess={responeGoogle}
              onFailure={responeGoogle}
              render={(renderProps) => {
                return (
                  <Button block type="button" className="social-btn" onClick={renderProps.onClick}
                  ><i className="fab fa-google"></i>&nbsp; 구글 로그인
                  </Button>
                );
              }}
            />
            <Form.Text>
                asdaasd
            </Form.Text>
            
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;