import React, { useState } from 'react';

const API = process.env.REACT_APP_API;

export const Home = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/new_transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });
    await res.json();

    setName("");
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
              onChange={(e) => setName(e.target.value)}
              value={name}
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