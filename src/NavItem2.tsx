interface NavItemProps {
    label: string;
  }
  
  function NavItem2(props: NavItemProps): JSX.Element {
    return (
      <>
        <a href="#">{props.label.toUpperCase()}</a>
      
      </>
    );
  }

export default NavItem2;