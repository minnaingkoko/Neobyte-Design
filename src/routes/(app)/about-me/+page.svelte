<script lang="ts">
	import logo from '$lib/images/logo.png';
	import about_banner from '$lib/images/about-banner.jpg';
	import innovation from '$lib/images/innovation.svg';
	import agility from '$lib/images/agility.svg';
	import passion from '$lib/images/passion.svg';
	import collaboration from '$lib/images/collaboration.svg';
	import centricity from '$lib/images/centricity.svg';
	import transparency from '$lib/images/transparency.svg';
	import profile from '$lib/images/profile.jpg';
</script>

<div class="w-[100%] flex flex-col bg-[#f9f9f9] items-center">
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
			<a class="text-[#71b095]" href="/about-me">About Me</a>
			<a class="transition duration-300 hover:text-[#71b095]" href="/blogs">Blogs</a>
		</nav>
		<a
			href="/contact-me"
			class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#71b095] transition duration-300"
		>
			Contact Me
		</a>
	</header>
	<div class="flex flex-row w-[1290px] gap-[30px] mt-[80px] mb-[140px]">
		<div class="w-[630px] flex flex-col justify-center">
			<h1 class="text-[#71b095] mb-[25px] text-[18px] font-bold leading-[1.28]">About Me</h1>
			<h2 class="leading-[1.17] text-[54px] mb-[35px] font-bold text-[#0c1523]">
				About our startup company
			</h2>
			<p class="text-[21px] leading-[1.62] text-[#585858] mb-[50px]">
				Neobyte Design empowers industries with innovative digital solutions, exceeding client
				expectations through cutting-edge web design and development, transforming ideas into
				reality.
			</p>
			<a
				class="w-[174px] h-[65px] rounded-[10px] bg-[#71b095] text-[18px] font-bold leading-[1.4] flex justify-center items-center text-[#fff] hover:bg-[#0c1523] transition duration-300"
				href="/contact-me">Get Started</a
			>
		</div>
		<div class="w-[550px] h-[676px]">
			<img
				class="w-[550px] h-[676px] object-cover rounded-[10px]"
				src={about_banner}
				loading="lazy"
				alt=""
			/>
		</div>
	</div>
</div>
<div class="w-[100%] flex flex-col items-center py-[140px]">
	<h1 class="mb-[30px] text-[#71b095] text-[18px] leading-[1.28] font-bold">The Values</h1>
	<h2 class="text-[54px] leading-[1.17] font-bold mb-[80px] w-[895px] text-[#0c1523] text-center">
		Building a Strong Foundation for Success
	</h2>
	<div class="flex flex-row gap-[30px]">
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={innovation} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Innovation</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				At Neobyte Design, we push the boundaries of creativity, revolutionizing industries with
				forward-thinking ideas and groundbreaking technology.
			</p>
		</div>
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={agility} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Agility</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				We thrive on rapid adaptation and flexibility, staying ahead of the curve in the
				ever-evolving tech landscape, ready to solve challenges with agility and precision.
			</p>
		</div>
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={passion} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Passion</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				Our passion drives us to innovate and disrupt the norm, channeling bold ideas and
				cutting-edge technology to create impactful solutions that change industries.
			</p>
		</div>
	</div>
	<div class="flex flex-row gap-[30px] mt-[30px]">
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={collaboration} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Collaboration</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				We believe in the power of collaboration, fostering strong partnerships and synergy to
				achieve collective success and deliver solutions that make a difference.
			</p>
		</div>
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={centricity} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Customer-Centricity</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				Our customers are at the heart of everything we do. We prioritize their needs, build lasting
				relationships, and deliver exceptional service that exceeds expectations.
			</p>
		</div>
		<div
			class="w-[410px] border-[2px] border-solid border-[#ebeaea] flex flex-col items-center pt-[53px] pb-[50px]"
		>
			<div
				class="w-[100px] h-[100px] flex justify-center items-center bg-[#f5f3fe] rounded-[100%] mb-[30px]"
			>
				<img src={transparency} loading="lazy" alt="" />
			</div>
			<div class="text-[28px] mb-[20px] font-bold leading-[1.25]">Transparency</div>
			<p class="w-[347px] leading-[1.62] text-center text-[#585858]">
				We are committed to openness, honesty, and accountability in all our operations, ensuring
				that trust and integrity are the cornerstones of our business.
			</p>
		</div>
	</div>
</div>
<div class="w-[100%] bg-[#f9f9f9] flex flex-col items-center pt-[140px] pb-[330px]">
	<h1 class="mb-[30px] text-[#71b095] text-[18px] leading-[1.28] font-bold">The Founder</h1>
	<h2 class="text-[54px] leading-[1.17] font-bold mb-[80px] w-[895px] text-[#0c1523] text-center">
		Meet the Dedicated Mind Behind Neobyte Design
	</h2>
	<div class="w-[100%] flex flex-col items-center">
		<img
			class="w-[409px] h-[424px] object-cover rounded-[10px] mb-[35px]"
			src={profile}
			loading="lazy"
			alt=""
		/>
		<div class="w-[409px] text-[32px] font-semibold leading-[1.25] mb-[10px]">Min Naing Ko Ko</div>
		<div class="w-[409px] text-[#71b095] text-[18px] font-bold leading-[1.28]">CTO & Founder</div>
	</div>
</div>
