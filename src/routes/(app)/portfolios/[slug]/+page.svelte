<script>
	import Header from '../../../../components/Header.svelte';
	export let data;

	import portfolio_detail1 from '$lib/images/portfolio_detail1.webp';

	const formatDate = (dateStr) => {
		const date = new Date(dateStr);

		// Customize the date format
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const formattedDate = date.toLocaleDateString('en-US', options);

		return formattedDate;
	};
</script>

<div class="w-[100%] flex justify-center">
	<Header />
</div>
<div class="mt-[120px] mb-[200px] pb-[200px] flex flex-col items-center">
	<div class="leading-[1.25] font-bold text-[16px] w-[890px]">
		{formatDate(data.portfolio.created_at)}
	</div>
	<h1 class="mt-[25px] w-[890px] text-[66px] leading-[1.17] font-bold">
		{data.portfolio.category}
	</h1>
	<img
		class="w-[1296px] h-[621px] object-cover rounded-[10px] mt-[40px] mb-[70px]"
		src={portfolio_detail1}
		loading="lazy"
		alt=""
	/>
	{@html data.portfolio.content}
</div>
