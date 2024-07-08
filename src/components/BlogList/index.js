// // Write your JS code here
// import BlogItem from '../BlogItem'
// import './index.css'

// const BlogList = props => {
//   const {blogsList} = props
//   return (
//     <ul className="blogList-container">
//       {blogsList.map(eachItem => (
//         <BlogItem blogListDetails={eachItem} key={eachItem.id}/>
//       ))}
//     </ul>
//   )
// }

// export default BlogList
import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { TailSpin } from 'react-loader-spinner';


import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({isLoading: false, blogsData: formattedData})
  }

  render() {
    const {blogsData, isLoading} = this.state
    this.getBlogsData()

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loder">
            {/* <Loader type="TailSpin" color="#00bfff" height={50} width={50} /> */}
            <TailSpin height="100" width="100" color="#00BFFF" ariaLabel="loading" />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItem blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
