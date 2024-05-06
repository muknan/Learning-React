import { NavLink } from "react-router-dom";

// NavLink adds an "active" class to active/current URL, which can be styled using CSS

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
