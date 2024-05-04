import "./Brand.css";
import { Link } from "react-router-dom";
function Brand() {
  return (
    <div className="brand__container">
      <Link to="/">
        <h1>LiberArt</h1>
      </Link>
      <img className="logo" src="logo-blanco.png" />
    </div>
  );
}
export default Brand;
