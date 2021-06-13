import "./style.css";
import icon from "../../assets/Icon.svg";
const Header = () => {
	return (
		<div className="header">
			<img className="icon" src={icon} alt="Logo" />
		</div>
	);
};

export default Header;
