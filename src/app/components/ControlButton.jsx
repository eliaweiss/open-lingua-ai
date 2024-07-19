import { useAppContext } from "../context/AppContext";
import TooltipWrapper from "./TooltipWrapper";

const ControlButton = ({ toolTip, onClick, children }) => {
  const { theme } = useAppContext();

  return (
    <button
      onClick={onClick}
      className={`relative p-2 hover:bg-gray-200 rounded-full group ${
        theme !== "dark" ? "text-gray-600" : "text-white"
      }`}
    >
      <TooltipWrapper text={toolTip}>{children}</TooltipWrapper>
    </button>
  );
};

export default ControlButton;
