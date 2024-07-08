// // Write your JS code here
// import './index.css'

// const BlogItem = props => {
//   const {blogListDetails} = props
//   const {title, description, publishedDate} = blogListDetails
//   return (
//     <li className="list-item">
//       <div className="top-section">
//         <h1>{title}</h1>
//         <p>{publishedDate}</p>
//       </div>
//       <p>{description}</p>
//       <hr className="hor-line" />
//     </li>
//   )
// }

// export default BlogItem
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img className="blog-item-image" src={imageUrl} alt={`item${id}`} />
          <div className="blog-item-info">
            <p className="blog-item-topic">{topic}</p>
            <h1 className="blog-item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
