import { dispatch } from '../dispatcher';
import NoteAPIClient from '../services/NoteAPIClient';

export default {
  fetchMyNotes() {
    return NoteAPIClient.fetchMyNotes().then(notes => {
      dispatch({ type: 'note/fetch/my', notes });
    });
  },

  fetchStarred() {
    return NoteAPIClient.fetchStarredNotes().then(notes => {
      dispatch({ type: 'note/fetch/starred', notes });
    });
  },

  fetch(id) {
    dispatch({ type: 'note/fetch/before'});
    return NoteAPIClient.fetchNote(id).then(note => {
      dispatch({ type: 'note/fetch', note });
    });
  },

  create() {
    return NoteAPIClient.createNote().then(note => {
      dispatch({ type: 'note/create', note });
    });
  },

  update(id, { title: body }) {
    return NoteAPIClient.updateNote(id, { title, body }).then(() => {
      dispatch({ type: 'note/update', id, note: { title, body } });
    });
  },

  delete(id) {
    return NoteAPIClient.deleteNote(id).then(() => {
      dispatch({ type: 'note/delete', id });
    });
  }
}
