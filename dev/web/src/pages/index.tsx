import { LeftSidebar } from "@Components/LeftSidebar/LeftSidebar";
import { Main } from "@Components/Main";

const HomePage = () => {
	return (
		<>
			<div className="min-h-screen min-w-screen bg-primary flex grid-cols-2">
				<LeftSidebar />
				<Main />
			</div>
		</>
	);
};

export default HomePage;
