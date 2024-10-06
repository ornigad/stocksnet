import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h3>Quicksearch</h3>
        <div>
          <input
            className="searchbar"
            type="text"
            placeholder="Search a stock"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
