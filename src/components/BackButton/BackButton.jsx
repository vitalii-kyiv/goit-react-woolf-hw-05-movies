import { useLocation, useNavigate, } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(location.state ?? '/');
  };

  return (
    <div className="container">
      <button onClick={handleBack} type="button">
        Go back
      </button>
    </div>
  );
};

export default BackButton;
