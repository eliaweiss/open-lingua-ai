import classNames from "classnames";

export function Input({ value, children, className, ...props }) {
  return (
    <input
      value={value || ""}
      className={classNames(`border rounded-sm px-1 m-1 text-black`, className)}
      {...props}
    >
      {children}
    </input>
  );
}
