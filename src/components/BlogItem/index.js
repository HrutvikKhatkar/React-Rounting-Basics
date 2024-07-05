// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogListDetails} = props
  const {title, description, publishedDate} = blogListDetails
  return (
    <li className="list-item">
      <div className="top-section">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="hor-line" />
    </li>
  )
}

export default BlogItem
