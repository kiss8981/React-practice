import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import backgroundimg from '../img/mainBackgroundIMG.svg'

class home extends Component {

  render() {
    return (
        <Carousel fade className="mt-2">
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>첫 페이지</h3>
              <p>첫 페이지 설명</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>두번째 페이지</h3>
              <p>두번째 페이지 설명</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="backgroundimg w-100"
              src={backgroundimg}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>세번째 페이지</h3>
              <p>세번째 페이지 설명</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default home;