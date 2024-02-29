import React, { useState } from "react";
import Button from "../Button/Button";
import { DocusealForm } from "@docuseal/react";

interface ContractSigningProps {
  onPrevious: () => void;
  onNext: () => void;
}
const USER_EMAIL = process.env.NEXT_DOCUSEAL_USER_EMAIL;
const DOCU_ID = "9pnXU7KmK5gjmX";
const ContractSigning: React.FC<ContractSigningProps> = ({
  onPrevious,
  onNext,
}) => {
  const [isSending, setIsSending] = useState(false);
  const [isDocumentSigned, setIsDocumentSigned] = useState(false);
  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div className="background-info">
      <h2>Renting Contract</h2>
      <div>
        <DocusealForm
          src={`https://docuseal.co/d/${DOCU_ID}`}
          email={USER_EMAIL}
          onComplete={(data) => {
            console.log(data);
          }}
        />
      </div>
      <div className="actions">
        <Button type="cancel" onClick={handleCancel} />
        <div className="next-previous-buttons">
          <Button onClick={onPrevious} type="previous" />
          <Button
            onClick={onNext}
            type="next"
            disabled={isSending || isDocumentSigned}
          />
        </div>
      </div>
    </div>
  );
};

export default ContractSigning;
