import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center justify-content-between">
            {note.title}
            <div className="d-flex">
              <i
                className="fa-solid fa-pen-to-square me-2"
                onClick={() => updateNote(note)}
              ></i>
              <i
                className="fa-solid fa-trash ms-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted.", "danger");
                }}
              ></i>
            </div>
          </h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
