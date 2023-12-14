import { useContext } from 'react';
// import './Button.css';
import { GridContext } from '../../contexts/GridContext';
import { PREVIEW_STATES } from '../../lib/consts/states';

const Button = () => {
  const { setPreviewState, previewState } = useContext(GridContext);

  const handleButtonClick = () => {
    setPreviewState(PREVIEW_STATES.DOME);
  };

  const isVisible = previewState === PREVIEW_STATES.BOOTH;
  return (
    <div
      onClick={() => handleButtonClick()}
      className={`_3d-button ${isVisible ? 'active' : ''}`}
    >
      Close
    </div>
  );
};

export default Button;
