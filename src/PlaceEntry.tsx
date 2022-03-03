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
        <section>
            <h2>{props.title}</h2>
            <h3>{props.placeName}</h3>
            <h3>{props.country}</h3>
            <img src={props.image.image} alt ={props.image.alt}/>
            <a href={props.link}>view on google maps</a>
            <p>{props.text}</p>

        </section>
    )
}


  
  export default PlaceEntry;