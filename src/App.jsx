import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="section">
        <h1 className="section-middle">
          site maker:DennisLee-pcleegood@gmail.com
        </h1>
      </div>
      <div className="box">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />s
        </Canvas>
      </div>{" "}
    </div>
  );
}

export default App;
