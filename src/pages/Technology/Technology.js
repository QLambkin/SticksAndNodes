import React from 'react'
import { Container } from 'react-bootstrap'
import Loader from 'react-loaders'
import CardCarousel from '../../components/CardCarousel'

const Technology = () => {
  return (
    <>
      <div className="homepage">
        <Container className="p-5 w-50">
          <CardCarousel />
        </Container>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Technology
