import { useEffect, useState } from "react";
import StoryBar from "./components/StoryBar";
import StoryOverlay from "./components/StoryOverlay";
import "./App.css";
function App() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); 
  const [loading, setLoading] = useState(false);
const [viewedStories, setViewedStories] = useState([]); // for viewed story border

  // Fetch stories.json
  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  // Auto next after 5 sec
  useEffect(() => {
    if (currentIndex === null) return;
    const timer = setTimeout(() => {
      nextStory();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const openStory = (index) => {
  setCurrentIndex(index);
  setLoading(true);
  
  if (!viewedStories.includes(index)) {
    setViewedStories([...viewedStories, index]);
  }
};


  const closeStory = () => {
    setCurrentIndex(null);
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setLoading(true);
    } else {
      closeStory();
    }
  };

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setLoading(true);
    } else {
      closeStory();
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-lg font-bold mt-4">📸 Interactive Stories Demo</h1>

      {/* Story Bar */}
      <StoryBar stories={stories} openStory={openStory}  viewedStories={viewedStories}   />

      {/* Story Overlay */}
      {currentIndex !== null && (
        <StoryOverlay
          story={stories[currentIndex]}
          closeStory={closeStory}
          prevStory={prevStory}
          nextStory={nextStory}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default App;
