<script>
	import '../app.css';
	import { messageStore, clearMessage } from '$lib/stores/messageStore';
</script>

{#if $messageStore.message}
	<div class="message-container">
		<div class="message {$messageStore.type}">
			<p>{$messageStore.message}</p>
			<button on:click={clearMessage}>×</button>
		</div>
	</div>
{/if}

<slot />

<style lang="postcss">
	:global(body) {
		background-color: #fff;
		color: #0c1523;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.28;
	}

	.message {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.success {
		background-color: #d4edda;
		color: #155724;
		border-left: 5px solid #155724;
	}

	.error {
		background-color: #f8d7da;
		color: #721c24;
		border-left: 5px solid #721c24;
	}

	.message button {
		background: none;
		border: none;
		color: inherit;
		font-size: 1.5em;
		line-height: 1;
		cursor: pointer;
	}

	.message-container {
		position: fixed;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 400px;
		z-index: 1000;
		animation:
			slideDown 0.5s ease-out forwards,
			fadeOut 0.5s ease-out 4.5s forwards;
		animation-fill-mode: forwards; /* Keeps the animation's final state */
	}

	@keyframes slideDown {
		from {
			transform: translateX(-50%) translateY(-20px);
			opacity: 0;
		}
		to {
			transform: translateX(-50%) translateY(0);
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@media (max-width: 480px) {
		.message-container {
			width: 100%;
			max-width: 90%;
		}

		.message {
			font-size: 0.9em;
		}

		.message button {
			font-size: 1.2em;
		}
	}
</style>
