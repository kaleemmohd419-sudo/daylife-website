import introVideo from "./assets/intro.mp4";

function App() {
  return (
    <video
      src={introVideo}
      autoPlay
      loop
      muted
      className="w-full h-auto"
    />
  );
}

export default App;
