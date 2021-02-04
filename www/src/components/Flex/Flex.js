import React from 'react';

export default ({ children, ...props }) => (
    <React.Fragment>
        <div
            className={props.className}
            style={{
                display: props.block ? 'block' : 'flex',
                justifyContent: props.justifyContent || 'flex-start',
                flexDirection: props.flexDirection || 'row',
                flexGrow: props.flexGrow || 0,
                flexBasis: props.flexBasis || 'auto',
                flexShrink: props.flexShrink || 1,
                flexWrap: props.flexWrap || 'nowrap',
                flex: props.flex || '0 1 auto',
                alignItems: props.alignItems || 'stretch',
                margin: props.margin || '0',
                padding: props.padding || '0',
                width: props.width || 'auto',
                height: props.height || 'auto',
                maxWidth: props.maxWidth || 'none',
                minWidth: props.minWidth || 'none'
            }}
        >
            {children}
        </div>
    </React.Fragment>

);