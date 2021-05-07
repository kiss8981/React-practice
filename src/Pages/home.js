import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import backgroundimg from '../img/mainBackgroundIMG.svg'

class home extends Component {

  render() {
    return (
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
    );
  }
}

export default home;