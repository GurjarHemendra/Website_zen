import React from 'react';
import BlogItem from './BlogItem';
import { Container } from 'react-bootstrap';

const BlogList = ({ blogPosts }) => {
  return (
    <Container>
      {blogPosts.map((post, index) => (
        <BlogItem key={index} post={post} />
      ))}
    </Container>
  );
};

export default BlogList;
