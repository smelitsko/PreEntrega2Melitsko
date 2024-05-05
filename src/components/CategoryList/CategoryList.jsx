import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/argentina",
    label: "Narrativa Argentina",
  },
  {
    path: "/category/extranjera",
    label: "Narrativa Extranjera",
  },
  {
    path: "/category/poesia",
    label: "Poesía",
  },
  {
    path: "/category/noficcion",
    label: "No Ficción",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category__list">
        {MIS_RUTAS.map((ruta) => (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
              key={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}{" "}
      </ul>
    </nav>
  );
}
export default CategoryList;
