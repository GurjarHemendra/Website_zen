import React from 'react';
import { Card } from 'react-bootstrap';

const BlogItem = ({ post }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.label}</Card.Subtitle>
        <Card.Text>{post.content}</Card.Text>
        {post.image && <Card.Img variant="bottom" src={post.image} alt={post.title} />}
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
