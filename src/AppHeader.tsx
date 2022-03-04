import NavItem from "./NavItem";
import NavItem2 from "./NavItem2";



function PageHeader(): JSX.Element {
    return (
      <header className="header">
        <h1 id="head">Anna-Zeri's Favourite Places</h1>
        <p className="text2">This is a list of my favourite places around the world.</p>
        <NavItem
        label="Canada" />
        <NavItem
        label="Mexico" />
        <NavItem
        label="Colombia" />
        <NavItem2
        label="Spain" />
      

      </header>


    );
  }
  
  export default PageHeader;

  