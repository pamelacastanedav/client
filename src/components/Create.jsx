import React, { useState } from "react";
import axios from "axios";
const Create = (props) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [important, setImportant] = useState(false);

  const createNote = (e) => {
    e.preventDefault();
    //created a note from form
    const newNote = {
      name,
      content,
      important,
    };
    //post from database and request to server and pass the object aka promise
    axios
      .post("http://localhost:8000/api/notes", newNote)
      .then((res) => {
        console.log(res.data);
        console.log("sucess to reach db!!");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error!!");
      });
  };
  return (
    <div>
      <h1>Create a note!</h1>

      <form onSubmit={createNote}>
        {JSON.stringify(important)}
        <p>
          Name:{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <p>
          Content:{" "}
          <input
            type="textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </p>
        <p>
          Important?{" "}
          <input
            type="checkbox"
            onChange={(e) => setImportant(e.target.checked)}
            checked={important}
          />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
