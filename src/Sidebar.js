export default function Sidebar(props) {
  return (
    <div>
      <img src={props.details.image} alt={props.details.title} />
      <h3>{props.details.title}</h3>
    </div>
  );
}
