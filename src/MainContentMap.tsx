import "./style.css";
export default SectionReactComponent;
const arrayofObjects = [
  {
    title: "Georgian Bay",
    placeName: "Ontario",
    country: "Canada",
    image:
      "https://media.istockphoto.com/photos/clear-waters-in-a-gray-cliffed-cove-picture-id1208028811?k=20&m=1208028811&s=612x612&w=0&h=y7G6BVpX4bvtNCu6l1ItvUmReT0fCfJ_gVQlG3_2Kqc=",
    alt: "A clear blue lake",
    link: "https://goo.gl/maps/HcMaB3ypvZPtewHDA",
    text: "Georgian bay is a clear blue bay in the Canadian side of Lake Huron.",
  },
  {
    title: "San Jose Del Pacifico",
    placeName: "Oaxaca",
    country: "Mexico",
    image:
      "https://media.istockphoto.com/photos/hiking-to-a-mountain-in-san-jose-del-pacifico-mexico-picture-id1199438709?k=20&m=1199438709&s=612x612&w=0&h=yDGoRPNQ6Wc-U9tBVtrbt4rW4fY-nS72zPBUp49FXpU=",
    alt: "A cat looks over cloudy mountains",
    link: "https://goo.gl/maps/33Vdzf695yPKqq4k9",
    text: "A town in the mountains in Oaxaca, near the Pacific coast.",
  },
  {
    title: "El Rio Hostel",
    placeName: "Buritaca",
    country: "Colombia",

    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2018/03/img_0669.jpg",
    alt: "A jungle riverside",

    link: "https://goo.gl/maps/5rDmaHkQQTMKLWcR7",
    text: "A riverside hostel by the Carribean coast of Colombia",
  },

  {
    title: "Alhambra",
    placeName: "Granada",
    country: "Spain",
    image:
      "https://media.istockphoto.com/photos/the-alhambra-picture-id182727232?k=20&m=182727232&s=612x612&w=0&h=w75AwT84vCxxG4De-3a6uheAmumI9Vw_rfmpTOrcspM=",
    alt: "Alhambra with snowy mountains behind",
    link: "https://goo.gl/maps/GeL9bkr8a6BQqNoF8",
    text: "The Alhambra is a remnant of the period of Islamic rule in the Iberian Peninsula (711–1492).",
  },
];

interface PlacesProps {
  title: string;
  placeName: string;
  country: string;
  image: { image: string; alt: string };
  link: string;
  text: string;
}

function SectionReactComponent() {
  return (
    <div>
      {arrayofObjects.map(
        ({ title, placeName, country, image, alt, link, text }) => (
          <section className="section" key={title}>
            <h2 className="title" key={title}>
              {title}
            </h2>
            <h3 className="country" key={placeName}>
              {placeName}, {country}
            </h3>
            <a className="image" key={image}>
              <img className="image" src={image}></img>
            </a>
            <a className="link" key={link} href={link}>
              <br />
              view on google maps
            </a>
            <p className="text" key={text}>
              {text}
            </p>
          </section>
        )
      )}
    </div>
  );
}

{
  /* {arrayofObjects.map(
        ({ title, placeName, country, image, alt, link, text }) => (
          <h3 className="country" key={placeName}>
            {placeName}, {country}
          </h3>
        )
      )}
      {arrayofObjects.map(
        ({ title, placeName, country, image, alt, link, text }) => (
          <a className="image" key={image}><img className="image" src={image}></img></a>
        )
      )}
      <br />
      {arrayofObjects.map(
        ({ title, placeName, country, image, alt, link, text }) => (
          <a className="link" key={link} href={link}>
            view on google maps
          </a>
        )
      )}
      {arrayofObjects.map(
        ({ title, placeName, country, image, alt, link, text }) => (
          <p className="text" key={text}>
            {text}
          </p>
        )
      )}
    </section>
  );
} */
}
