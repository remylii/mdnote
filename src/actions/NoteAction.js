/* @flow */
import { dispatch } from '../dispatcher';
import NoteApiClient from '../services/NoteApiClient';

type StrictNote = {| title: string, body: string |};

export default class NoteAction {
  static fetchMyNotes() {
    return NoteApiClient.fetchMyNotes().then(notes => {
      dispatch({ type: 'note/fetch/my', notes });
    });
  }

  static fetchStarred() {
    return NoteApiClient.fetchStarredNotes().then(notes => {
      dispatch({ type: 'note/fetch/starred', notes });
    });
  }

  static fetch(id: number) {
    dispatch({ type: 'note/fetch/before'});
    return NoteApiClient.fetchNote(id).then(note => {
      dispatch({ type: 'note/fetch', note });
    });
  }

  static create() {
    return NoteApiClient.createNote().then(note => {
      dispatch({ type: 'note/create', note });
    });
  }

  static update(id: number, { title, body }: StrictNote) {
    return NoteApiClient.updateNote(id, { title, body }).then(() => {
      dispatch({ type: 'note/update', id, note: { title, body } });
    });
  }

  static delete(id: number) {
    return NoteApiClient.deleteNote(id).then(() => {
      dispatch({ type: 'note/delete', id });
    });
  }
}
