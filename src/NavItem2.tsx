interface NavItemProps {
    label: string;
  }
  
  function NavItem2(props: NavItemProps): JSX.Element {
    return (
      <>
        <a className="nav" href="#">{props.label.toUpperCase()}</a>
      
      </>
    );
  }

export default NavItem2;