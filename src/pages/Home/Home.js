import '../../App.scss'
import Loader from 'react-loaders'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from '../../components/BlogCard'
import CardCarousel from '../../components/CardCarousel'
import FeaturedSection from '../../components/FeaturedSection'

const Home = () => {
  return (
    <>
      <div className="homepage">
        <Container>
          <div className="home-grid-container">
            <div className="big-card p-5">
              <BlogCard />
            </div>
            <div className="featured-section p-5">
              <FeaturedSection />
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

export default Home
