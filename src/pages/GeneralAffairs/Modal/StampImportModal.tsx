import React, { useState } from 'react';
import StampImportModalOne from './_StampModalStep/StampImportModalOne';
import StampImportModalTwo from './_StampModalStep/StampImportModalTwo';
import StampImportModalThree from './_StampModalStep/StampImportModalThree';
import StampImportModalFour from './_StampModalStep/StampImportModalFour';
import StampImportConfirmModal from './StampImportConfirmModal';

type StampImportModalProps = {
  onClose: () => void;
  onModalClose: () => void;
};

const StampImportModal: React.FC<StampImportModalProps> = ({
  onClose, onModalClose
}) => {

  const [step, setStep] = useState(0);

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <StampImportModalOne onClose={onClose} nextStep={setStep} />
        );
      case 1:
        return (
          <StampImportModalTwo onClose={onClose} nextStep={setStep} />
        );
      case 2:
        return (
          <StampImportModalThree onClose={onClose} nextStep={setStep} />
        );
      case 3:
        return (
          <StampImportModalFour onClose={onClose} nextStep={setStep} />
        );
      case 4:
        return (
          <StampImportConfirmModal onClose={onClose} onModalClose={onModalClose} />
        );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default StampImportModal;
