<script lang="ts">
	import logo from '$lib/images/logo.png';
	import ClientFeedback from '../../../../components/ClientFeedback.svelte';
	import Footer from '../../../../components/Footer.svelte';
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
			<a class="text-[#28483A]" href="/services">Services</a>
			<a class="transition duration-300 hover:text-[#28483A]" href="/portfolios">Portfolios</a>
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

<ClientFeedback />

<div class="pb-[200px] mb-[200px]"></div>
