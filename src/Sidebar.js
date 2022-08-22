import "./sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <img src={props.details.image} alt={props.details.title} />
      <h3>{props.details.title}</h3>
      <p>{props.details.subtitle}</p>
      <hr></hr>
      {props.details.tags.map((tag) => {
        return <span>{tag}</span>;
      })}
      <hr></hr>
    </div>
  );
}
export default Sidebar;
