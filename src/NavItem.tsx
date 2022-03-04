interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <a className="nav" href="#">
        {props.label.toUpperCase()}
      </a>
      <span className="span"> | </span>
    </>
  );
}

export default NavItem;
