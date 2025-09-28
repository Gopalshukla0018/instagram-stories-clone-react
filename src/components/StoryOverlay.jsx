import { useEffect, useState } from "react";

const StoryOverlay = ({ story, closeStory, prevStory, nextStory, loading, setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2; // 2% increase
      });
    }, 100);
    return () => clearInterval(interval);
  }, [story]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xs md:max-w-lg h-[90vh] md:h-[640px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        {loading && (
          <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
            Loading...
          </p>
        )}

        {/* Progress Bar */}
        <div className="absolute top-2 left-2 right-2 h-1 bg-gray-600 rounded-full">
          <div
            className="h-full bg-pink-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <img
          src={story.image}
          onLoad={() => setLoading(false)}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Tap zones */}
        <div
          className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
          onClick={prevStory}
        />
        <div
          className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
          onClick={nextStory}
        />

        {/* Close button */}
        <button
          onClick={closeStory}
          className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full px-3 py-1 text-sm transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default StoryOverlay;
