import React, { useState } from 'react';
import StampExportModalOne from './_StampModalStep/StampExportModalOne';
import StampExportModalTwo from './_StampModalStep/StampExportModalTwo';
import StampExportModalThree from './_StampModalStep/StampExportModalThree';

type StampImportModalProps = {
  onClose: () => void;
  onModalClose: () => void;
};

const StampExportModal: React.FC<StampImportModalProps> = ({
  onClose, onModalClose
}) => {

  const [step, setStep] = useState(0);

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <StampExportModalOne onClose={onClose} nextStep={setStep} />
        );
      case 1:
        return (
          <StampExportModalTwo onClose={onClose} nextStep={setStep} />
        );
      case 2:
        return (
          <StampExportModalThree onClose={onClose} nextStep={setStep} onModalClose={onModalClose}/>
        );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default StampExportModal;
