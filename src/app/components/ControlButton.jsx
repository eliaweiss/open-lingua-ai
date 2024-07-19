import TooltipWrapper from "./TooltipWrapper";

export const ControlButton = ({ toolTip, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:bg-gray-200 rounded-full group"
    >
      <TooltipWrapper text={toolTip}>{children}</TooltipWrapper>
    </button>
  );
};
