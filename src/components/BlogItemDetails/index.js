import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

import './index.css';

class BlogItemDetails extends Component {
  state = { blogData: {}, isLoading: true };

  componentDidMount() {
    this.getBlogItemData();
  }

  getBlogItemData = async () => {
    const { id } = this.props.params;
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
    const data = await response.json();
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    };
    this.setState({ blogData: updatedData, isLoading: false });
  };

  renderBlogItemDetails = () => {
    const { blogData } = this.state;
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-img" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <TailSpin height="100" width="100" color="#00BFFF" ariaLabel="loading" />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    );
  }
}

// Higher Order Component to use useParams
const BlogItemDetailsWrapper = () => {
  const params = useParams();
  return <BlogItemDetails params={params} />;
};

export default BlogItemDetailsWrapper;
