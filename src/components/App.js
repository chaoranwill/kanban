import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';//connect the actions


/*class App extends React.Component {
	render(){
		const {notes} = this.props;

		return (
				<div>
					<button className="add-note" onClick={this.addNote}>+</button>
					<Notes notes={notes} onDelete={this.deleteNote} onNoteClick={this.activeNoteEdit} onEdit={this.editNote}/>
				</div>
		);
	}

	addNote = () => {
		this.props.NoteActions.create({
			id: uuid.v4(),
			task: 'new task'
		});
	} 

	deleteNote = (id,e) => {
		e.stopPropagation();		
		this.props.NoteActions.delete(id);
	}

	activeNoteEdit = (id) => {
		this.props.NoteActions.update({id,editing:true});
	}

	editNote = (id,task) => {
		this.props.NoteActions.update({id,task,editing:false});
	}
}

export default connect(({ notes }) => ({
    notes
}), {
    NoteActions
})(App)
*/
const App = ({LaneActions,lanes}) => {
	const addLane = () => {
		LaneActions.create({
			id: uuid.v4(),
			name: 'new lane'
		});
	};

	return (
		<div>
			<button className="add-lane" onClick={addLane}>+</button>
			<Lanes lanes={lanes} />
		</div>
	);
};

export default connect (({lanes}) => ({
	lanes
}),{
	LaneActions
})(App)