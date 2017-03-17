import { dispatch } from '../dispatcher';
import NoteApiClient from '../services/NoteApiClient';

export default class StarAction {
  static create(noteId) {
    return NoteApiClient.createStar(noteId).then(() => {
      dispatch({ type: 'star/create', noteId });
    });
  }

  static delete(noteId) {
    return NoteApiClient.deleteStar(noteId).then(() => {
      dispatch({ type: 'star/delete', noteId });
    });
  }
}
