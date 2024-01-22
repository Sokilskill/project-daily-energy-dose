import { useLocation, useNavigate } from 'react-router';

const GoBackBtn = () => {
  const location = useLocation();
  const { from } = location.state;
  const navigate = useNavigate();
  // console.log(from);
  const handleClickBackBtn = () => {
    navigate(from.pathname);
  };
  return (
    <>
      <button onClick={() => handleClickBackBtn()}>Back</button>
    </>
  );
};

export default GoBackBtn;
