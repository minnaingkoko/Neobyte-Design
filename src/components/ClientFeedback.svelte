<script>
    	import quote from '$lib/images/quote.svg';
        import client from '$lib/images/about-banner.jpg';
</script>


<div class="w-[100%] flex justify-center mt-[140px]">
	<div class="w-[1290px] h-[753px] flex flex-row pl-[65px] gap-[60px] items-center">
		<img class="rounded-[10px]" src={client} alt="">

		<div class="w-[615px] h-[590px] flex flex-col justify-center">
			<div class="text-[#28483A] text-[18px] mb-[25px] font-bold leading-[1.28]">Client Feedback</div>
			<h2 class="mb-[60px] text-[54px] leading-[1.17] font-bold">People who already love our support</h2>
			<img class="w-[59px] h-[43px] mb-[15px]" src={quote} alt="">
			<p class="text-[21px] leading-[1.62] text-[#585858] mb-[30px]">
				Neobyte Design completely transformed our website, delivering innovative solutions that improved our user experience and boosted engagement. The professionalism and dedication were truly impressive.
			</p>
			<div class="flex flex-col">
				<h3 class="text-[24px] font-medium leading-[1.42] mb-[10px]">John Doe</h3>
				<div class="text-[18px] leading-[1.28] font-bold text-[#28483A]">
					Yangon, Myanmar
				</div>
			</div>
		</div>
	</div>
</div>