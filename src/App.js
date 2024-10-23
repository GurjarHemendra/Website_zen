import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BlogPostForm from './components/BlogPostForm';
import BlogList from './components/BlogList';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
  const [blogPosts, setBlogPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const addBlogPost = (post) => {
    setBlogPosts([post, ...blogPosts]);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <BlogPostForm addBlogPost={addBlogPost} />
        <BlogList blogPosts={blogPosts} />
      </Container>
    </div>
  );
};

export default App;
