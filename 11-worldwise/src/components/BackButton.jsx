import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ nav = -1 }) {
  const navigate = useNavigate();
  return (
    <Button
      type={"back"}
      onCLick={(e) => {
        e.preventDefault();
        navigate(nav);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
