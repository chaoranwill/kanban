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
					<button onClick={this.addNote}>add</button>
					<Notes notes={notes} onDelete={this.deleteNote}/>
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

	deleteNote = () => {
		console.log('deleteNote');
	}
}