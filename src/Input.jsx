import axios from "axios";
import React, { useState, useEffect } from "react";
const Input = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
  });

  const handle_submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // console.log(formData);
  };

  const handle_change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div style={{ margin: "1%", display: "flex" }}>
      <input
        type="text"
        style={{ margin: "1%" }}
        value={formData.id || ""}
        name="id"
        onChange={handle_change}
        placeholder="id"
      />
      <input
        type="text"
        value={formData.title || ""}
        style={{ margin: "1%" }}
        name="title"
        onChange={handle_change}
        placeholder="title"
      />
      <input
        type="text"
        style={{ margin: "1%" }}
        name="body"
        value={formData.body || ""}
        onChange={handle_change}
        placeholder="body"
      />
      <input type="button" value="Click me" onClick={handle_submit} />
    </div>
  );
};

export default Input;
