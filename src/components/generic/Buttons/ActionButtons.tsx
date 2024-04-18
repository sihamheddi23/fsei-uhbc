import React from "react";
import AButton from "./AButton";

interface ActionButtonsProps {
  onUpdateRow: () => void;
  onDeleteRow: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onUpdateRow,
  onDeleteRow,
}) => {
  return (
    <div className="flex justify-center gap-2">
      <AButton variant="UPDATE" onClick={onUpdateRow} />
      <AButton variant="DELETE" onClick={onDeleteRow} />
    </div>
  );
};

export default ActionButtons;
