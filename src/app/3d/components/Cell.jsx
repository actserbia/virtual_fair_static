import PropTypes from 'prop-types';
import { useContext, memo, useState, useEffect } from 'react';
// import { useControls } from 'leva';
import { Booth } from './models/Booth';

import { GridContext } from '../contexts/GridContext';
import { PREVIEW_STATES } from '../lib/consts/states';

const Cell = ({
  childPositionPulledBack,
  childRotation,
  company_name: companyName,
  sector_name: sectorName,
  description_short: descriptionShort,
  company_logo: textureUrl,
  inactive,
  handleOpenAccountInfo,
  account_id: accountId,
}) => {
  const { previewState } = useContext(GridContext);

  const [isFocused, setIsFocused] = useState(false);
  const handleBuildingClick = () => {
    handleOpenAccountInfo({ accountId });
  };

  useEffect(() => {
    if (previewState === PREVIEW_STATES.DOME && isFocused) {
      setIsFocused(false);
    }
  }, [previewState, isFocused]);

  return (
    <>
      <Booth
        onClick={() => handleBuildingClick()}
        inactive={inactive}
        position={childPositionPulledBack}
        color={'white'}
        rotation={childRotation}
        companyName={companyName}
        sectorName={sectorName}
        descriptionShort={descriptionShort}
        textureUrl={textureUrl}
        isFocused={isFocused}
      ></Booth>
    </>
  );
};

Cell.defaultProps = {
  positionX: 7,
  companyName: 'Unknown name',
  sectorName: 'Unknown sector',
};

Cell.propTypes = {
  position: PropTypes.array,
  sectorId: PropTypes.string,
  label: PropTypes.string,
  companyName: PropTypes.string,
  sectorName: PropTypes.string,
};

export default memo(Cell);
