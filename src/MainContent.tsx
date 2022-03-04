import PlaceEntry from "./PlaceEntry";
import SectionReactComponent from "./MainContentMap";
export default MainContent;

function MainContent(): JSX.Element {
  return (
    <div className="main">
      <SectionReactComponent />
      {/* <PlaceEntry 
        title={"Georgian Bay"}
        placeName={"Ontario"}
        country={"Canada"}
        image={{
          image:
            "https://media.istockphoto.com/photos/clear-waters-in-a-gray-cliffed-cove-picture-id1208028811?k=20&m=1208028811&s=612x612&w=0&h=y7G6BVpX4bvtNCu6l1ItvUmReT0fCfJ_gVQlG3_2Kqc=",
          alt: "A clear blue lake",
        }}
        link={"https://goo.gl/maps/HcMaB3ypvZPtewHDA"}
        text={
          "Georgian bay is a clear blue bay in the Canadian side of Lake Huron."
        }
      />
      <p></p>
      <PlaceEntry
        title={"San Jose Del Pacifico"}
        placeName={"Oaxaca"}
        country={"Mexico"}
        image={{
          image:
            "https://media.istockphoto.com/photos/hiking-to-a-mountain-in-san-jose-del-pacifico-mexico-picture-id1199438709?k=20&m=1199438709&s=612x612&w=0&h=yDGoRPNQ6Wc-U9tBVtrbt4rW4fY-nS72zPBUp49FXpU=",
          alt: "A cat looks over cloudy mountains",
        }}
        link={"https://goo.gl/maps/33Vdzf695yPKqq4k9"}
        text={"A town in the mountains in Oaxaca, near the Pacific coast."}
      />
      <p></p>
      <PlaceEntry
        title={"El Rio Hostel"}
        placeName={"Buritaca"}
        country={"Colombia"}
        image={{
          image:
            "https://cdn.theculturetrip.com/wp-content/uploads/2018/03/img_0669.jpg",
          alt: "A jungle riverside",
        }}
        link={"https://goo.gl/maps/5rDmaHkQQTMKLWcR7"}
        text={"A riverside hostel by the Carribean coast of Colombia"}
      />
      <p></p>
      <PlaceEntry
        title={"Alhambra"}
        placeName={"Granada"}
        country={"Spain"}
        image={{
          image:
            "https://media.istockphoto.com/photos/the-alhambra-picture-id182727232?k=20&m=182727232&s=612x612&w=0&h=w75AwT84vCxxG4De-3a6uheAmumI9Vw_rfmpTOrcspM=",
          alt: "Alhambra with snowy mountains behind",
        }}
        link={"https://goo.gl/maps/GeL9bkr8a6BQqNoF8"}
        text={
          "The Alhambra is a remnant of the period of Islamic rule in the Iberian Peninsula (711–1492)."
        }
      /> */}
    </div>
  );
}
