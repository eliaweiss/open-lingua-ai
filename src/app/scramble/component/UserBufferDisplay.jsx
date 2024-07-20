import { useScrambleContext } from "../context/ScrambleContext";

export function UserBufferDisplay() {
  const { getCurrentUserBufferArray } = useScrambleContext();
  return (
    <div className="flex space-x-2 flex-wrap">
      {getCurrentUserBufferArray().map((word, key) => (
        <div
          key={key}
          className={`rounded-lg ${word.isHint && "bg-[#89090945]"}`}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
}
