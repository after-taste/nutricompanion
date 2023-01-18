const Flex = ({ children, style, ...props }) => {
	let styles = {
		display: 'flex',
		flexDirection: props.flexDirection || 'column',
		flexWrap: props.flexWrap || 'nowrap',
		...style
	};

	if (props.fullWidth) styles.width = '100%';
	if (props.alignItems) styles.alignItems = props.alignItems;
	if (props.justifyContent) styles.justifyContent = props.justifyContent;
	if (props.backgroundColor) styles.backgroundColor = props.backgroundColor;

	return (<>
		<div
			className={props.className}
			style={styles}
			onClick={props.onClick}>
			{children}
		</div>
	</>);
};

export default Flex;
