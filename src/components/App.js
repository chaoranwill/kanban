import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';



export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'learn react'
				},
				{
					id: uuid.v4(),
					task: 'do laundry'
				}
			]
		};
	}

	render(){
		const {notes} = this.state;

		return (
				<div>
					<button className="add-note" onClick={this.addNote}>+</button>
					<Notes notes={notes} onDelete={this.deleteNote} onNoteClick={this.activeNoteEdit} onEdit={this.editNote}/>
				</div>
		);
	}

	addNote = () => {
		/*console.log('add note');*/
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'new task'
			}])
		});
	} 

	deleteNote = (id,e) => {
		/*console.log('deleteNote');*/
		e.stopPropagation();

		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		});
	}

	activeNoteEdit = (id) => {
		// console.log('activeNoteEdit');
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id == id) {
					note.editing = true;
				}

				return note;
			})
		});
	}

	editNote = (id,task) => {
		// e.stopPropagation();
		// console.log('editNote');
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id == id) {
					note.editing = false;
					note.task = task;
				}

				return note;
			})
		})
	}
}