import { useScrambleContext } from "../context/ScrambleContext";

export function UserBufferDisplay() {
  const { getCurrentUserBufferArray } = useScrambleContext();
  return (
    <div className="flex flex-wrap">
      {getCurrentUserBufferArray().map((word, key) => (
        <span
          key={key}
          className={`mr-2 rounded-lg ${word.isHint && "bg-[#89090945]"}`}
        >
          {word.word}
        </span>
      ))}
    </div>
  );
}
