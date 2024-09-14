import { useAppContext } from "@/app/context/AppContext";
import { useScrambleFunctions } from "../context/scrambleFunctions";

export function UserBufferDisplay() {
  const { getCurrentUserBufferArray } = useScrambleFunctions();
  const { isTargetRtl } = useAppContext();
  return (
    <div
      className={`flex flex-wrap ${
        isTargetRtl ? "text-right text-rtl" : "text-left"
      }`}
    >
      {getCurrentUserBufferArray().map((word, key) => (
        <span
          key={key}
          className={`inline mr-2 rounded-lg ${
            word.isHint ? "bg-[#89090945]" : ""
          }`}
        >
          {word.txt}
        </span>
      ))}
    </div>
  );
}
