import TooltipWrapper from "./TooltipWrapper";
import classNames from "classnames";

const ControlButton = ({ className, toolTip, children, ...props }) => {
  return (
    <button
      className={classNames(
        `relative p-2 hover:bg-gray-200 rounded-lg group hover:bg-pHov`,
        className
      )}
      {...props}
    >
      <TooltipWrapper text={toolTip}>{children}</TooltipWrapper>
    </button>
  );
};

export default ControlButton;
