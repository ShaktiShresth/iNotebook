import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (ev) => {
    ev.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added.", "success");
  };

  const onChange = (ev) => {
    setNote({ ...note, [ev.target.name]: ev.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={onChange}
            name="title"
            type="text"
            value={note.title}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            minLength={5}
            required
            placeholder="Note title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={onChange}
            name="description"
            type="text"
            value={note.description}
            className="form-control"
            id="description"
            minLength={5}
            required
            placeholder="Note description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            onChange={onChange}
            name="tag"
            type="text"
            value={note.tag}
            className="form-control"
            id="tag"
            minLength={4}
            required
            placeholder="Note tag"
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          onClick={handleClick}
          type="submit"
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
