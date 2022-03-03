import NavItem from "./NavItem";


function PageHeader(): JSX.Element {
    return (
      <header>
        <h1>Anna-Zeri's Favourite Places</h1>
        <p>This is a list of my favourite places around the world.</p>
        <NavItem
        label="Canada" />
        <NavItem
        label="Mexico" />
        <NavItem
        label="Colombia" />
        <NavItem
        label="Spain" />

      </header>


    );
  }
  
  export default PageHeader;

  