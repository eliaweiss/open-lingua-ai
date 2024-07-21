import classNames from "classnames";

export function Input({ children, className, ...props }) {
  return (
    <input
      className={classNames(`border rounded-sm px-1 m-1 text-black`, className)}
      {...props}
    >
      {children}
    </input>
  );
}
