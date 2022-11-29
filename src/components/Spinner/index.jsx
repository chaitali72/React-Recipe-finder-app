import "./styles.scss";
import loading from "assets/loading.gif";

function Spinner() {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Spinner;
