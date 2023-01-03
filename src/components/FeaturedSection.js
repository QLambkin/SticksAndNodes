import React from 'react'
import FeaturedCard from './FeaturedCard'

const FeaturedSection = () => {
  return (
    <>
      <div className="featured-section-header">Featured Articles</div>
      <div className='featured-section-card-wrapper'>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </>
  )
}

export default FeaturedSection
