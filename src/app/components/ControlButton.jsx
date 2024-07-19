import { useAppContext } from "../context/AppContext";
import TooltipWrapper from "./TooltipWrapper";
import classNames from "classnames";

const ControlButton = ({ className, toolTip, onClick, children }) => {
  const { theme } = useAppContext();

  return (
    <button
      onClick={onClick}
      className={classNames(
        `relative p-2 hover:bg-gray-200 rounded-lg group hover:bg-pHov`,
        className
      )}
    >
      <TooltipWrapper text={toolTip}>{children}</TooltipWrapper>
    </button>
  );
};

export default ControlButton;
