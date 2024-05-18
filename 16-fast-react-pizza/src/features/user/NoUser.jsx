import { useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";

function NoUser() {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  return (
    <div className="px-4 py-3">
      <LinkButton to="/">&larr; Back to homepage</LinkButton>

      <p className="mt-7 text-xl font-semibold">
        Please provide your name to start ordering :)
      </p>
    </div>
  );
}

export default NoUser;
