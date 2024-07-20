import { useScrambleContext } from "../context/ScrambleContext";

export function UserBufferDisplay() {
  const {
    getCurrentUserBufferArray,
  } = useScrambleContext();
  return (
    <div className="flex space-x-2">
      {getCurrentUserBufferArray().map((word, key) => (
        <div key={key}>{word}</div>
      ))}
    </div>
  );
}
