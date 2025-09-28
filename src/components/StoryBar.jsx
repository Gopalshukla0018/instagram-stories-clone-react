const StoryBar = ({ stories, openStory, viewedStories }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-800 rounded-xl shadow-inner mt-4 w-full max-w-md overflow-x-auto">
      {stories.map((story, idx) => (
        <div
          key={story.id}
          className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-full p-[2px] 
      ${
        viewedStories.includes(idx)
          ? "bg-gray-500"
          : "bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600"
      }`}
          onClick={() => openStory(idx)}
        >
          <img
            src={story.image}
            className="w-full h-full rounded-full object-cover border-2 border-gray-900"
          />
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
