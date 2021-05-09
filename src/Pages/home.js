import React, { Component } from 'react';
import { Carousel, Container, Jumbotron, Button, Card, CardColumns} from 'react-bootstrap';
import backgroundimg from '../img/mainBackgroundIMG.svg'
import 'holderjs';

class home extends Component {
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="First slide"
            />
            <Carousel.Caption>
              <Container className="mainPage">
                <h3>첫 페이지</h3>
                <hr className="mainPageHr" align="left"/>
                <p>첫 페이지 설명</p>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="Second slide"
            />
            <Carousel.Caption>
              <Container className="mainPage">
                <h3>두번째 페이지</h3>
                <hr className="mainPageHr" align="left"/>
                <p>두번째 페이지 설명</p>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Container className="mainPage">
                <h3>세번째 페이지</h3>
                <hr className="mainPageHr" align="left"/>
                <p>세번째 페이지 설명</p>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Jumbotron>
          <Container>
          <h1>제목</h1>
          <p>
            설명 페이지
          </p>
          <p>
            <Button variant="primary">문의하기</Button>
          </p>
          </Container>
        </Jumbotron>
        <Container>
          <CardColumns>
            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title </Card.Title>
                <Card.Text>
                  Card Text This card has supporting text below as a natural lead-in
                  to additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 10 mins ago</small>
              </Card.Footer>
            </Card>

            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Card Text his card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 10 mins ago</small>
              </Card.Footer>
            </Card>

            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Card Text his card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 11 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
        </Container>
    </>
    );
  }
}

export default home;