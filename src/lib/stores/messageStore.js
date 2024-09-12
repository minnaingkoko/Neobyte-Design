import { writable } from 'svelte/store';

export const messageStore = writable({
	type: null, // 'error' or 'success'
	message: null
});

export function clearMessage() {
	messageStore.set({
		type: null,
		message: null
	});
}

export function setSuccess(message) {
	messageStore.set({ type: 'success', message });
	setTimeout(() => {
		clearMessage();
	}, 5000);
	console.log('success');
}

export function setError(message) {
	messageStore.set({ type: 'error', message });
	setTimeout(() => {
		clearMessage();
	}, 5000);
	console.log('error');
}
