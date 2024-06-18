import { NavLink } from "react-router-dom";
import "./adminbutton.css";

const AdminButton = () => {
  return (
    <div className="admin-button">
      <NavLink to="/requestsList">
        <button>Редактировать запросы</button>
      </NavLink>
      <button>Добавить услугу</button>
    </div>
  );
};

export default AdminButton;
