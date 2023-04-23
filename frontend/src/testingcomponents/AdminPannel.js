import React, { useState } from "react";
import axios from "axios";

const AdminPannel = () => {
  const [title, setTitle] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [description, setDescription] = useState("");

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", backgroundImage);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:8000/uploadPodcast", formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>AdminPannel</h1>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file"  onChange={(e)=> {setBackgroundImage(e.target.files[0]);}} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPannel;
