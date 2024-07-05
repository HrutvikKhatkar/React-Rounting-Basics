// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogList-container">
      {blogsList.map(eachItem => (
        <BlogItem blogListDetails={eachItem} key={eachItem.id}/>
      ))}
    </ul>
  )
}

export default BlogList
