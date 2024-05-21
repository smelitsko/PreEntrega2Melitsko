import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/argentina",
    label: "Narrativa Argentina",
    id: 1,
  },
  {
    path: "/category/extranjera",
    label: "Narrativa Extranjera",
    id: 2,
  },
  {
    path: "/category/poesia",
    label: "Poesía",
    id: 3,
  },
  {
    path: "/category/noficcion",
    label: "No Ficción",
    id: 4,
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category__list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
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
