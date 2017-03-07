import { dispatch } from '../dispatcher';
import NoteAPIClient from '../services/NoteAPIClient';

export default {
  create(noteId) {
    return NoteAPIClient.createStar(noteId).then(() => {
      dispatch({ type: 'star/create', noteId });
    });
  },

  delete(noteId) {
    return NoteAPIClient.deleteStar(noteId).then(() => {
      dispatch({ type: 'star/delete', noteId });
    });
  }
}
