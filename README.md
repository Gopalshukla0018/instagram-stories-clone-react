# 📸 Instagram Stories Clone (React)

A simplified **Instagram Stories** feature built with React.  
This project was developed as part of a frontend coding test to demonstrate UI/UX skills and interactive functionality.

🔗 **Live Demo:** [View Here](https://cactro-hiring-test.vercel.app/)  
📂 **Repository:** [GitHub Repo](https://github.com/Gopalshukla0018/instagram-stories-clone-react)

---

## 🚀 Features

- 📱 **Mobile-first UI** – Designed for mobile screens (not desktop).
- 🎞 **Story Bar** – Horizontal list of story circles.
- 🌈 **Viewed/Unviewed Indicator** –  
  - New stories → gradient border.  
  - Viewed stories → gray border.
- 👆 **Manual Navigation** –  
  - Tap left = previous story.  
  - Tap right = next story.  
  - Close button to exit.
- ⏱ **Auto Navigation** – Stories auto-advance every 5 seconds.
- 📊 **Progress Bar** – Visual timer showing story progress.
- ⏳ **Loading State** – Shows “Loading...” before story image appears.
- 🎨 **Smooth Transitions** – Fade-in image effect for a clean experience.
- 📂 **External Data** – Stories fetched from `stories.json`.

---

## 🛠️ Tech Stack

- **React.js** (with Hooks: `useState`, `useEffect`)
- **Tailwind CSS** for styling
- **JavaScript (ES6+)**
- **Vercel** for deployment

---

## 📂 Project Structure

src/
├── components/
│ ├── StoryBar.jsx # Story circles (viewed/unviewed)
│ └── StoryOverlay.jsx # Fullscreen story viewer
├── App.jsx # Main logic
├── App.css # Global styles
public/
├── stories.json # Story data (images)

yaml
Copy code

---

## ⚙️ Setup & Run Locally

1. **Clone this repo**
   ```bash
   git clone https://github.com/Gopalshukla0018/instagram-stories-clone-react.git
   cd instagram-stories-clone-react
2. **Install dependencies**
   ```bash
   git clone https://github.com/Gopalshukla0018/instagram-stories-clone-react.git
   cd instagram-stories-clone-react
3. **Start the development server**
    `npm run dev`

  
📜 License

This project is open-source and free to use.
👨‍💻 Author

Gopal Shukla
Frontend Developer | React Enthusiast
