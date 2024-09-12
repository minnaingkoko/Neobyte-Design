<script>
	export let question;
	export let answer;
	import arrow_down from '$lib/images/arrow-down.svg';

	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-[620px] h-[auto] rounded-[8px] cursor-pointer px-[35px] pt-[43px] pb-[28px] flex flex-col"
	style="box-shadow: 0 2px 16px rgba(0, 0, 0, .08);"
	on:click={toggle}
>
	<div class="flex flex-row justify-between mb-[25px]">
		<h3 class="text-[24px] font-bold text-[#39394a]">{question}</h3>
		<img class="w-[19px] h-[11px]" src={arrow_down} loading="lazy" alt="" />
	</div>
	{#if isOpen}
		<div class="text-[#585858] text-[21px] leading-[1.62] mb-[10px]">
			{answer}
		</div>
	{/if}
</div>
