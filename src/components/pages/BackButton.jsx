import { useNavigate } from "react-router-dom";
import "../Forma/style.css";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // переход на предыдущую страницу в истории
  };

  return (
    <div className="back">
      <button onClick={handleClick}>Назад</button>
    </div>
  );
}
export default MyComponent;
