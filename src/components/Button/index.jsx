import "./style.css";

export default function Button({ type, onClick, buttonText }) {
  // const handleClick = () => {
  //   console.log("Hlello");
  // };
  return (
    <div className="button-main">
      <button type={type} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
