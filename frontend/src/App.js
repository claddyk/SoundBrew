<<<<<<< HEAD
import Profile from "./Profile";
import Signup from "./components/user/Signup.js";

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Signup></Signup>
=======
import "./App.css";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div>
      <ParticleBackground />
      <CenterTitle />
    </div>
  );
}

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Particle JS Integration</h1>
      </div>
>>>>>>> 0c092d67d45abbb703df7d8d8bd64fe49300b361
    </div>
  );
}

export default App;
