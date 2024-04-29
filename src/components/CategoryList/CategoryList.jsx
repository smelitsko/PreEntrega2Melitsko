import "./CategoryList.css";

function CategoryList() {
  return (
    <nav>
      <ul className="category__list">
        <li>
          <a href="/#">Libros</a>
        </li>
        <li>
          <a href="/#">Talleres</a>
        </li>
        <li>
          <a href="/#">Blog</a>
        </li>
        <li>
          <a href="/#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
export default CategoryList;
