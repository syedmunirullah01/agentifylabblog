import Featured from '@/components/Featured'
import LatestBlogs from '@/components/LatestBlog'
import Tech from '@/components/Tech'
import React from 'react'

const blogPage = () => {
  return (
      <>
          <LatestBlogs />
          <Featured />
          <Tech />
      </>
  )
}

export default blogPage
