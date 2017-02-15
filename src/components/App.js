import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class App extends React.Component {
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
		/*console.log('add note');*/
		this.props.NoteActions.create({
			id: uuid.v4(),
			task: 'new task'
		});
	} 

	deleteNote = (id,e) => {
		/*console.log('deleteNote');*/
		e.stopPropagation();

		/*this.setState({
			notes: this.props.notes.filter(note => note.id !== id)
		});*/
		this.props.NoteActions.delete(id);
	}

	activeNoteEdit = (id) => {
		// console.log('activeNoteEdit');
		/*this.setState({
			notes: this.props.notes.map(note => {
				if (note.id == id) {
					note.editing = true;
				}

				return note;
			})
		});*/
		this.props.NoteActions.update({id,editing:true});
	}

	editNote = (id,task) => {
		// e.stopPropagation();
		// console.log('editNote');
		/*this.setState({
			notes: this.props.notes.map(note => {
				if (note.id == id) {
					note.editing = false;
					note.task = task;
				}

				return note;
			})
		})*/
		this.props.NoteActions.update({id,task,editing:false});
	}
}

export default connect(({ notes }) => ({
    notes
}), {
    NoteActions
})(App)
