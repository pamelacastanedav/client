import React, { useState, useEffect } from "react";
import axios from "axios";
import outStyle from "../components/Main.modules.css";
import { Link } from "react-router-dom";
const Main = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotesDb();
  }, []);

  //   make api call to get info
  const getNotesDb = () => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>All notes</h2>
      <div>
        {/* <button type="button" onClick="myFunction()">
          Set background image
        </button> */}

        <script>
          function myFunction(){" "}
          {(document.body.style.backgroundImage = "url('img_tree.png')")}
        </script>
      </div>
      {/* {JSON.stringify(notes)} */}

      {notes.map((note, idx) => {
        return (
          <div key={note._id} className="note">
            <h4>{note.important ? "******" : " "}</h4>
            <h5>
              <Link to={"/note/" + note._id}>{note.name}</Link>
            </h5>
            <p>{note.content}</p>
            {note.createdAt}
            <br />
            <button className="button">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
