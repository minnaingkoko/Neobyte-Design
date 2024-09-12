<script lang="ts">
	import logo from '$lib/images/logo.png';
	import portfolio1 from '$lib/images/portfolio1.webp';
	import portfolio2 from '$lib/images/portfolio2.webp';
	import portfolio3 from '$lib/images/portfolio3.webp';
	import portfolio4 from '$lib/images/portfolio4.webp';
	import portfolio5 from '$lib/images/portfolio5.webp';
	import portfolio6 from '$lib/images/portfolio6.webp';
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
			<a class="text-[#71b095]" href="/portfolios">Portfolios</a>
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
</div>

<div class="mt-[120px] mb-[200px] pb-[200px] flex flex-col items-center">
	<div class="flex flex-col gap-[48px]">
		<div class="flex flex-row gap-[24px]">
			<div class="w-[416px] h-[614px]">
				<img src={portfolio1} loading="lazy" alt="">
			</div>
			<div class="w-[416px] h-[614px]">
				<img src={portfolio2} loading="lazy" alt="">
			</div>
			<div class="w-[416px] h-[614px]">
				<img src={portfolio3} loading="lazy" alt="">
			</div>
		</div>
		<div class="flex flex-row gap-[24px]">
			<div class="w-[416px] h-[614px]">
				<img src={portfolio4} loading="lazy" alt="">
			</div>
			<div class="w-[416px] h-[614px]">
				<img src={portfolio5} loading="lazy" alt="">
			</div>
			<div class="w-[416px] h-[614px]">
				<img src={portfolio6} loading="lazy" alt="">
			</div>
		</div>
	</div>
</div>
