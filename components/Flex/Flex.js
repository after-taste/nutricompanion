const Flex = ({ children, ...props }) => (<>
	<div
		className={props.className}
		style={{
			display: props.block ? 'block' : 'flex',
			justifyContent: props.justifyContent || 'flex-start',
			flexDirection: props.flexDirection || 'column',
			flexGrow: props.flexGrow || 0,
			flexBasis: props.flexBasis || 'auto',
			flexShrink: props.flexShrink || 1,
			flexWrap: props.flexWrap || 'nowrap',
			flex: props.flex || '0 1 auto',
			alignItems: props.alignItems || 'stretch',
			// margin: props.margin || '0',
			// padding: props.padding || '0',
			// width: props.width || 'auto',
			// height: props.height || 'auto',
			// maxWidth: props.maxWidth || 'none',
			// minWidth: props.minWidth || 'none'
		}}
		onClick={props.onClick}>
		{children}
	</div>
</>);

export default Flex;
