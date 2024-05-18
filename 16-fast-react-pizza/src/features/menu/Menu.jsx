import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import NoUser from "../user/NoUser";

function Menu() {
  const menu = useLoaderData();

  const { username } = useSelector(getUser);

  if (!username) return <NoUser />;
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
