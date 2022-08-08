import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Dzentra</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Pos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Order</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Order Status Screen</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Expense</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Customers</a>
        </div>
       
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Service</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Reports</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Tools</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>

        
      </div>
    </div>
  );
};

export default Sidebar;
