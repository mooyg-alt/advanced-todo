import { LeftSidebar } from "../Components/LeftSidebar";
import { Main } from "../Components/Main";

const HomePage = () => {
	return (
		<>
			<div className="h-screen w-screen bg-primary flex grid-cols-2">
				<LeftSidebar/>
				<Main/>
			</div>
		</>
	);
};

export default HomePage;
