export default function Alert(props) {
  const capitalizeWord = (word) => {
    if (word === "danger") {
      word = "error";
    }
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "40px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissable fade show`}
          role="alert"
        >
          <div>
            <strong>{capitalizeWord(props.alert.type)} : </strong>{" "}
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
