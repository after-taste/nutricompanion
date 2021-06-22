import Basic from "components/Layout/Basic";

const withLayout = (WrappedComponent, options) => (props) => {
	let Layout = Basic;

	return (<>
		<Layout  {...props} >
			<WrappedComponent {...props} />
		</Layout>
	</>);
};

export default withLayout;
