type AppProps = {
	Title: string;
	Icon: JSX.Element;
};
export const Headings = ({ Title, Icon }: AppProps): JSX.Element => {
	return (
		<div className="p-5 flex items-center hover:text-black transition-all ease-in-out ">
			{Icon}
			<h2 className="font-semibold text-lg ml-3">{Title}</h2>
		</div>
	);
};
