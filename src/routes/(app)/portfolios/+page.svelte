<script lang="ts">
	import logo from '$lib/images/logo.png';
	import portfolio1 from '$lib/images/portfolio1.webp';
	import portfolio2 from '$lib/images/portfolio2.webp';
	import portfolio3 from '$lib/images/portfolio3.webp';
	import portfolio4 from '$lib/images/portfolio4.webp';
	import portfolio5 from '$lib/images/portfolio5.webp';
	import portfolio6 from '$lib/images/portfolio6.webp';

	const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

	export let data;

	const formatDate = (dateStr) => {
		const date = new Date(dateStr);

		// Customize the date format
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const formattedDate = date.toLocaleDateString('en-US', options);

		return formattedDate;
	};
</script>

<div class="w-[100%] flex justify-center">
	<header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
		<div>
			<a href="/">
				<img class="h-[80px] object-cover" src={logo} loading="lazy" alt="" />
			</a>
		</div>
		<nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
			<a class="transition duration-300 hover:text-[#28483A]" href="/">Home</a>
			<a class="transition duration-300 hover:text-[#28483A]" href="/services">Services</a>
			<a class="text-[#28483A]" href="/portfolios">Portfolios</a>
			<a class="transition duration-300 hover:text-[#28483A]" href="/about-me">About Me</a>
			<a class="transition duration-300 hover:text-[#28483A]" href="/blogs">Blogs</a>
		</nav>
		<a
			href="/contact-me"
			class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#28483A] transition duration-300"
		>
			Contact Me
		</a>
	</header>
</div>

<div class="mt-[120px] mb-[200px] pb-[200px] flex flex-col items-center">
	<div class="w-[1290px]">
		<div class="text-[#28483A] text-[18px] mb-[25px] font-bold leading-[1.28]">Portfolios</div>
		<h2 class="mb-[100px] text-[64px] leading-[1.17] font-bold">
			Explore Projects & Success Stories
		</h2>
	</div>

	<div class="flex flex-col gap-[48px]">
		<div class="flex flex-row flex-wrap w-[1296px] gap-[24px]">
			{#each data.portfolios as portfolio, index}
				<div class="w-[416px] h-[614px] flex flex-col">
					<img class="w-[416px] h-[503px] object-cover" src={images[index]} loading="lazy" alt="" />
					<div class="w-[416px] bg-[#f8f9fa] h-[111px] flex flex-col items-center">
						<a
							href={`/portfolios/${portfolio.slug}`}
							class="text-[20px] mt-[24px] font-bold transition duration-300 hover:text-[#28483A]"
							>{portfolio.category}</a
						>
						<h3 class="leading-[1.7] text-[16px] mt-[8px] font-medium text-[#28483A]">
							{portfolio.client}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
