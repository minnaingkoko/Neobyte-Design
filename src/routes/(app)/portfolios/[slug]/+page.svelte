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
	<img
		class="w-[1296px] h-[621px] object-cover rounded-[10px] mb-[30px]"
		src={portfolio_detail1}
		loading="lazy"
		alt=""
	/>
	<div
		class="w-[1296px] h-[133px] bg-[#1f2732] rounded-[10px] mb-[36px] flex justify-center items-center gap-[150px]"
	>
		<div class="h-[59px] flex flex-col justify-center items-center gap-[8px]">
			<div class="text-[#71b095] text-[20px] font-bold leading-[1.2]">Client</div>
			<div class="text-[#fff] text-[16px] font-medium leading-[1.7]">{data.portfolio.client}</div>
		</div>
		<div class="h-[59px] flex flex-col justify-center items-center gap-[8px]">
			<div class="text-[#71b095] text-[20px] font-bold leading-[1.2]">Project Value</div>
			<div class="text-[#fff] text-[16px] font-medium leading-[1.7]">{data.portfolio.value}</div>
		</div>
		<div class="h-[59px] flex flex-col justify-center items-center gap-[8px]">
			<div class="text-[#71b095] text-[20px] font-bold leading-[1.2]">Date</div>
			<div class="text-[#fff] text-[16px] font-medium leading-[1.7]">
				{formatDate(data.portfolio.created_at)}
			</div>
		</div>
		<div class="h-[59px] flex flex-col justify-center items-center gap-[8px]">
			<div class="text-[#71b095] text-[20px] font-bold leading-[1.2]">Category</div>
			<div class="text-[#fff] text-[16px] font-medium leading-[1.7]">{data.portfolio.category}</div>
		</div>
	</div>
	<div class="w-[1296px]">
		<h2 class="text-[24px] mb-[24px] font-bold">Project Detail</h2>

		{@html data.portfolio.content}
	</div>
</div>
