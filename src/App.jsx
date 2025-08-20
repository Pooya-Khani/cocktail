import { ScrollTrigger, SplitText } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<div className="h-dvh" />
		</main>
	);
};

export default App;
