import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API;

export const Home = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      'author' : author,
      'content' : content
    };

    axios
      .post(`${API}/new_transaction`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      
    setAuthor("");
    setContent("");
  }

  return (
    <div className="row">
      <div className="col-lg-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="author">Author</label>
            <input 
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="form-control"
              id="author"
              placeholder="Author name"
              autoFocus
            />
          </div>
          <div clasclassNames="form-group">
            <label for="content">Example textarea</label>
            <textarea
              className="form-control"
              onChange={(e) => setContent(e.target.value)}
              id="content"
              rows="3"
              value={content}
            ></textarea>
          </div>
          <button className="btn btn-primary mt-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}