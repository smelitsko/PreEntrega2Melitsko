import "./ButtonNavBar.css";
const ButtonNavBar = ({ callback }) => {
  return (
    <button className="button__nav__bar" onClick={callback}>
      Menu Icon
    </button>
  );
};
export default ButtonNavBar;
