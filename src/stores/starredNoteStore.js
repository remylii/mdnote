import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class StarredNoteStore extends ReduceStore {
  getInitialState() {
    return { notes: [] };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'note/fetch/starred':
        return { notes: action.notes };

      default:
        return state;
    }
  }
}

export default new StarredNoteStore(dispatcher);
