import { logo } from "../../assets";
const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src={logo} alt="M" width="40" height="40" />
      </div>
      <h2 className="p-5">Enjoy your Music</h2>
    </header>
  );
};

export default Header;
