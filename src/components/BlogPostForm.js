import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BlogPostForm = ({ addBlogPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState('Query');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addBlogPost({ title, content, image, label });
      setTitle('');
      setContent('');
      setImage(null);
      setLabel('Query');
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="file" onChange={handleImageChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select value={label} onChange={(e) => setLabel(e.target.value)}>
          <option value="Query">Query</option>
          <option value="Doubt">Doubt</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default BlogPostForm;
