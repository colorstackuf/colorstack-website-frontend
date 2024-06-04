import { writable } from 'svelte/store';

export const onAbout = writable<boolean>(false);
export const onSponsors = writable<boolean>(false);
export const onStudents = writable<boolean>(false);
