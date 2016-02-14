import { EventEmitter } from 'events'

const store = new EventEmitter()
const STORAGE_KEY = 'notes-app';

export default store

store.fetch = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

store.save = notes => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}