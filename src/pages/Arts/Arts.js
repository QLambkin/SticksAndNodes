import React from 'react'
import Loader from 'react-loaders'
import BlogCard from '../../components/BlogCard'
import { Col, Container, Row } from 'react-bootstrap'
import CardCarousel from '../../components/CardCarousel'

const Arts = () => {
  return (
    <>
      <div className="homepage">
        <Container>
          <div className="home-grid-container">
            <div className="big-card p-5">
              <BlogCard />
            </div>
          </div>
        </Container>

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

export default Arts
