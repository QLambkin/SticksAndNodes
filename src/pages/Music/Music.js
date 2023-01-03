import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from 'react-loaders'
import BlogCard from '../../components/BlogCard'
import CardCarousel from '../../components/CardCarousel'

const Music = () => {
  return (
    <>
      <div className="homepage">
        <Container className="p-5">
          <Row>
            <Col>
              <BlogCard />
            </Col>
            <Col>
              <BlogCard />
            </Col>
            <Col>
              <BlogCard />
            </Col>
            <Col>
              <BlogCard />
            </Col>
          </Row>
        </Container>

        <Container className="p-5 w-50">
          <CardCarousel />
        </Container>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Music
