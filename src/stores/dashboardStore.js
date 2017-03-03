import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class DashboardStore extends ReduceStore {
  getInitialState() {
    return {
      notes: [],  // ノート一覧
      selectedNoteId: null
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'note/create':
        return Object.assign({}, state, {
          notes: [action.note, ...state.notes],
          selectedNoteId: action.note.id
        });

      default:
        return state;
    }
  }
}

export default new DashboardStore(dispatcher);
