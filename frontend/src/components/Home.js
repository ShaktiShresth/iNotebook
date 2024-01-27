import Notes from "./Notes";

export default function Home(props) {
  const { showAlert } = props;
  return (
    <div className="mt-4">
      <Notes showAlert={showAlert} />
    </div>
  );
}
