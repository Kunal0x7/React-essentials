export default function CoreConcepts(props){
    return(
      <li>
        <img src={props.image} alt={props.title} />
        <title>{props.title}</title>
        <p>{props.description}</p>
      </li>
    )
  }