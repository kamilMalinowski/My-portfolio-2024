// react particles
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

// react components
import TheHeader from "./layout/TheHeader";
import AboutMe from "./layout/AboutMe";
import MyProjects from "./layout/MyProjects";
import MySkills from "./layout/MySkills";
import MyExperience from "./layout/MyExperience";
import TheFooter from "./layout/TheFooter";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, [])
  return (
    <div className="font-nunito text-slate-300 bg-gray-950 text-base">
       <Particles options={particlesOptions} init={particlesInit} />
      <TheHeader></TheHeader>
      <main>
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <MySkills></MySkills>
        <MyExperience></MyExperience>
      </main>
      <TheFooter></TheFooter>
    </div>
  );
}

export default App;
