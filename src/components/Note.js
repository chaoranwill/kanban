import React from 'react';

/*export default (props) => <div>{props.task}</div>*/

export default ({task,onDelete=()=>{console.log('delete')}}) => (
	<div>
		<span>{task}</span>
		<button onClick={onDelete}>x</button>
	</div>
);