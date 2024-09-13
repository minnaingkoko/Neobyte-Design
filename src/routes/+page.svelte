<script lang="ts">
	import logo from '$lib/images/logo.png';
	import hero from '$lib/images/hero-img.jpg';
	import hero_shape from '$lib/images/hero-shape.png';
	import Footer from '../components/Footer.svelte';
	import FaqItem from '../components/FAQItem.svelte';

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

<div class="bg-[url('/background.jpg')] w-[100%] h-[915px] flex flex-col items-center">
	<header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
		<div>
			<a href="/">
				<img class="w-[195px] h-[80px] object-cover" src={logo} loading="lazy" alt="" />
			</a>
		</div>
		<nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
			<a class="text-[#71b095]" href="/">Home</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/services">Services</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/portfolios">Portfolios</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/about-me">About Me</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/blogs">Blogs</a>
		</nav>
		<a
			href="/contact-me"
			class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#71b095] transition duration-300"
		>
			Contact Me
		</a>
	</header>
	<div class="w-[100%] h-[760px] relative flex flex-row justify-center">
		<div class="flex flex-row gap-[45px] w-[1290px] h-[760px] mt-[25px]">
			<div class="flex flex-col pt-[30px]">
				<h1 class="w-[710px] text-[80px] font-bold mb-[30px] text-[#0c1523]">
					Building Websites that Elevate Your Brand
				</h1>
				<p class="w-[610px] text-[21px] leading-[1.62]">
					From concept to launch, I design websites that engage, inspire, and convert, helping your
					business grow online.
				</p>
				<a
					href="/contact-me"
					class="w-[174px] h-[65px] mt-[50px] bg-[#71b095] text-[#fff] flex justify-center items-center rounded-[10px] text-[18px] font-bold leading-[1.4] cursor-pointer hover:bg-[#0c1523] transition duration-300"
				>
					Get Started
				</a>
			</div>
			<div class="h-[760px] absolute right-0">
				<div class="relative">
					<img
						class="w-[660px] h-[760px] object-cover rounded-tl-[100px] relative z-[10]"
						src={hero}
						loading="lazy"
						alt=""
					/>
					<img
						class="absolute bottom-[65px] left-[-90px] z-[0]"
						src={hero_shape}
						loading="lazy"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-[100%] flex flex-col items-center mt-[200px] mb-[200px]">
	<h2 class="mb-[35px] text-[54px] font-bold leading-[1.17]">Frequently asked questions</h2>
	<p class="w-[685px] text-[#585858] text-[21px] leading-[1.62] text-center">
		Welcome to our Frequently Asked Questions (FAQ) section! Here, we have compiled a list of
		commonly asked questions to provide you with quick and helpful answers.
	</p>
	<div class="flex flex-row gap-[50px] mt-[80px]">
		<div class="flex flex-col gap-[30px]">
			<FaqItem
				question="What services do you offer?"
				answer="Neobyte Design specializes in custom websites, offering design, development, maintenance, and SEO. I also provide e-commerce solutions, branding, and digital marketing strategies to boost your online presence."
			/>

			<FaqItem
				question="How much does a website cost?"
				answer="My pricing varies based on the complexity and scope of each project. I offer flexible packages tailored to meet the unique needs of every client. Contact me for a detailed quote customized to your specific requirements."
			/>

			<FaqItem
				question="How long does design take?"
				answer="The timeline for a website design project varies depending on the project's size and
			complexity. On average, a standard website can take 4-6 weeks from initial consultation to
			launch. I'll provide a more accurate timeline after discussing your project's details."
			/>
		</div>
		<div class="flex flex-col gap-[30px]">
			<FaqItem
				question="Can you update my website?"
				answer="Whether you need a complete redesign or just updates, Neobyte Design can transform your website to better reflect your brand, enhance functionality, and meet the latest design standards, ensuring a modern online presence."
			/>

			<FaqItem
				question="What technologies do you use?"
				answer="I utilize a variety of platforms and technologies, including SvelteKit for frontend
			development, Node.js for backend, and open-source solutions tailored to your project's
			needs. My goal is to deliver a high-performing, scalable website."
			/>

			<FaqItem
				question="Do you offer support after launch?"
				answer="Absolutely! Neobyte Design provides ongoing support and maintenance services to ensure
			your website runs smoothly. I offer different maintenance packages to suit your needs,
			including updates, backups, and performance monitoring."
			/>
		</div>
	</div>
</div>

<div class="w-[100%] flex flex-col items-center mt-[200px] pb-[200px] mb-[200px]">
	<div class="w-[1290px]">
		<div class="text-[#71b095] text-[18px] mb-[25px] font-bold leading-[1.28]">The Blog</div>
		<h2 class="mb-[100px] text-[64px] leading-[1.17] font-bold">Browse the articles & resources</h2>
	</div>
	<div class="flex flex-row w-[1290px] flex-wrap gap-[30px]">
		{#each data.posts as post, index}
			{#if index === 0}
				<div class="hidden"></div>
			{:else if index < 3}
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
							class="text-[36px] leading-[1.25] font-bold hover:text-[#71b09586] transition duration-300"
							href={`/blogs/${post.slug}`}>{post.title}</a
						>
					</div>
				</article>
			{/if}
		{/each}
	</div>
</div>

<Footer />
