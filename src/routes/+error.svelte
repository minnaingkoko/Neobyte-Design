<script lang="ts">
	import img404 from '../lib/images/404-img.svg';
</script>

<div class="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
	<img class="w-[580px] h-[360px] object-cover mb-[30px]" src={img404} loading="lazy" alt="" />
	<h1 class="text-[32px] font-[800] leading-[1.2] tracking-[-0.32px] mb-[16px] text-[#0c1523]">
		Oops! This Page is Not Found.
	</h1>
	<p
		class="w-[636px] text-[16px] tracking-[0.5px] font-medium leading-[1.7] text-[#0c1523] text-center mb-[30px]"
	>
		We can’t find the page your are looking for. You can head back to Homepage.
	</p>
	<a
		class="bg-[#71b095] w-[158px] h-[54px] flex justify-center items-center text-[#fff] font-bold text-[15px] leading-[26px] hover:bg-[#0c1523] transition duration-300"
		href="/">Home Page</a
	>
</div>
