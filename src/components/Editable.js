import React from 'react';
import classnames from 'classnames'

/*const Edit = ({onEdit = () => {console.log('edit')},value,...props}) => (
	<div onClick={onEdit} {...props}>
		<span>edit: {value}</span>
	</div>
);*/

class Edit extends React.Component {
	render() {
		const {className,onEdit,value,...props} = this.props;

		return <input type="text" className={classnames('edit',className)} autoFocus="true" defaultValue={value} onBlur={this.finishEdit} onKeyPress={this.checkEnter} {...props} />
	}

	checkEnter = (e) =>{
		if (e.key == 'Enter') {
			this.finishEdit(e);
		}
	}

	//如果有onEdit参数，则调用父参数
	finishEdit = (e) => {
		const value = e.target.value;
		if (this.props.onEdit) {
			this.props.onEdit(value);
		}
	}
}

export default ({editing,className,value,onEdit,...props}) => {
	if (editing) {
		return <Edit className={className} value={value} onEdit={onEdit} {...props} />;
	}

	return <span className={className} {...props}>{value}</span>;
}

