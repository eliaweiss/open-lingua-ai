import { usePlaySentenceContext } from "./context/PlaySentenceContext";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'

export const PlaySentencesExercise = () => {
  const { state, playPause, skip } = usePlaySentenceContext();
  const { totalSentences, playedSentences, isPlaying } = state;

  return (
    <div className="flex flex-col justify-center items-center text-center w-full">
      <div className="font-bold text-xl">Play Sentences in a loop</div>

      {/* Button Row */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={playPause}
          className="relative p-2 hover:bg-gray-200 rounded-full group"
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <PlayIcon className="w-6 h-6 text-gray-600" />
          )}
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? "Pause" : "Play"}
          </span>
        </button>
        <button
          onClick={skip}
          className="relative p-2 hover:bg-gray-200 rounded-full group"
        >
          <ForwardIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Skip
          </span>
        </button>
      </div>

      {/* Statistic Row */}
      <div className="mt-4 flex flex-col items-center">
        <div className="text-sm">
          {playedSentences}/{totalSentences}
        </div>
        <div className="text-xs text-gray-500 mt-1 hover:text-gray-700">
          Hover to explain statistics
        </div>
      </div>
    </div>
  );
};
