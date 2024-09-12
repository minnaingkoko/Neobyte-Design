<script lang="ts">
	import logo from '$lib/images/logo.png';
	import blog1 from '$lib/images/professional-business-website-online-presence.webp';
	import blog2 from '$lib/images/future-web-design-trends-dark-mode-ai-chatbots.webp';
	import blog3 from '$lib/images/user-experience-ux-design-navigation-mobile-optimization.webp';
	import blog4 from '$lib/images/branding-visual-identity-consistent-branding.webp';
	import blog5 from '$lib/images/modern-website-design-responsive-clean-layout.webp';

	const images = [blog1, blog2, blog3, blog4, blog5];

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
				<img class="w-[195px] h-[80px] object-cover" src={logo} loading="lazy" alt="" />
			</a>
		</div>
		<nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
			<a class="transition duration-300 hover:text-[#71b095]" href="/">Home</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/services">Services</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/portfolios">Portfolios</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/about-me">About Me</a>
			<a class="text-[#71b095]" href="/blogs">Blogs</a>
		</nav>
		<a
			href="/contact-me"
			class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#71b095] transition duration-300"
		>
			Contact Me
		</a>
	</header>
</div>

<div class="mt-[120px] mb-[200px] pb-[200px] flex flex-col items-center">
	<div class="w-[1290px]">
		<div class="text-[#432cf3] text-[18px] mb-[25px] font-bold leading-[1.28]">The Blog</div>
		<h2 class="w-[600px] mb-[100px] text-[64px] leading-[1.17] font-bold">Browse the articles & resources</h2>
	</div>
	<div class="flex flex-row w-[1290px] flex-wrap gap-[30px]">
		{#each data.posts as post, index}
			{#if index === 0}
				<article
					class="w-[1290px] h-[554px] rounded-[10px] flex flex-row"
					style="box-shadow: 0 4px 50px rgba(0, 0, 0, .1);"
				>
					<img
						class="w-[660px] h-[554px] object-cover rounded-tl-[10px] rounded-bl-[10px]"
						src={images[0]}
						loading="lazy"
						alt=""
					/>
					<div
						class="w-[630px] h-[554px] bg-[#0c1523] rounded-tr-[10px] rounded-br-[10px] text-white px-[45px] py-[60px]"
					>
						<div class="mb-[25px] leading-[1.25] font-bold text-[16px]">
							{formatDate(post.created_at)}
						</div>
						<a
							href={`/blogs/${post.slug}`}
							class="text-[36px] font-bold leading-[1.25] transition duration-300 hover:text-[#71b095]"
							>{post.title}</a
						>
						<div class="leading-[1.62] text-[21px] mb-[35px] mt-[25px]">
							In 2024, having a professional website is no longer just an option—it’s a necessity.
							Whether you’re a small startup or an established enterprise, a well-designed website
							can significantly impact your business's success.
						</div>
						<a
							class="w-[174px] h-[65px] flex justify-center items-center border-[1px] border-solid border-[#555658] rounded-[10px] hover:border-[#71b095] hover:bg-[#71b095] transition duration-300"
							href={`/blogs/${post.slug}`}>Read more</a
						>
					</div>
				</article>
			{:else}
				<article
					class="w-[630px] h-[675px] mt-[20px] rounded-[5px]"
					style="box-shadow: 0 4px 50px rgba(0, 0, 0, .1);"
				>
					<img
						class="w-[630px] h-[417px] object-cover rounded-tl-[5px] rounded-tr-[5px]"
						src={images[index]}
						loading="lazy"
						alt=""
					/>
					<div class="h-[258px] px-[40px] pt-[50px] pb-[45px]">
						<div class="mb-[25px] leading-[1.25] font-bold text-[16px]">
							{formatDate(post.created_at)}
						</div>
						<a
							class="text-[36px] leading-[1.25] font-bold hover:text-[#71b095] transition duration-300"
							href={`/blogs/${post.slug}`}>{post.title}</a
						>
					</div>
				</article>
			{/if}
		{/each}
	</div>
</div>
