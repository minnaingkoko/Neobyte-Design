<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
	import Header from '../../../../components/Header.svelte';
	export let data;

	import blog1 from '$lib/images/professional-business-website-online-presence.webp';
	import blog2 from '$lib/images/future-web-design-trends-dark-mode-ai-chatbots.webp';
	import blog3 from '$lib/images/user-experience-ux-design-navigation-mobile-optimization.webp';
	import blog4 from '$lib/images/branding-visual-identity-consistent-branding.webp';
	import blog5 from '$lib/images/modern-website-design-responsive-clean-layout.webp';

	const images = [blog5, blog4, blog3, blog2, blog1];

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
		{formatDate(data.post.created_at)}
	</div>
	<h1 class="mt-[25px] w-[890px] text-[66px] leading-[1.17] font-bold">{data.post.title}</h1>
	<img
		class="w-[1290px] h-[688px] object-cover rounded-[10px] mt-[40px] mb-[70px]"
		src={images[data.post.id - 1]}
		loading="lazy"
		alt=""
	/>
	{@html data.post.content}
</div>
