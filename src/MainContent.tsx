import PlaceEntry from "./PlaceEntry";
import SectionReactComponent from "./MainContentMap";
export default MainContent;

function MainContent(): JSX.Element {
  return (
    <div className="section">
      <SectionReactComponent />
    </div>
  );
}
