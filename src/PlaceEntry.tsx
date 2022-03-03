import { JsxElement } from "typescript";



interface PlacesProps {
    title: string;
    placeName: string;
    country: string;
    image: {image: string; alt: string};
    link: string;
    text: string;
  }

function PlaceEntry(props: PlacesProps): JSX.Element {
    return(
        <section className="section">
            <h2 className="title">{props.title}</h2>
            <h3 className="country">{props.placeName}, {props.country}</h3>
            <img className="image" src={props.image.image} alt ={props.image.alt}/><br/>
            <a className="link"href={props.link}>view on google maps</a>
            <p className="text">{props.text}</p>

        </section>
    )
}


  
export default PlaceEntry;