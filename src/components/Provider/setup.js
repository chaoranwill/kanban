import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';

//connecting the store with provider
export default alt => {
	alt.addStore('NoteStore',NoteStore);
	alt.addStore('LaneStore',LaneStore);

	persist(alt,storage(localStorage),'app');
}