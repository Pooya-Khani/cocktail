import { scrollTrigger, splitText } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {
	return (
		<main>
			<Navbar />
		</main>
	);
};

export default App;
