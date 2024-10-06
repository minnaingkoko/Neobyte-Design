<script lang="ts">
	import logo_white from '$lib/images/logo-white.png';
	import facebook_icon from '$lib/images/facebook-icon.svg';
	import linkedin_icon from '$lib/images/linkedin-icon.svg';
	import viber_icon from '$lib/images/viber-icon.svg';
	import phone_icon from '$lib/images/phone-icon.svg';
	import message_icon from '$lib/images/message-icon.svg';
	import newsletter_shape1 from '$lib/images/newsletter-shape-1.svg';
	import newsletter_shape2 from '$lib/images/newsletter-shape-2.png';
	import { setSuccess, setError } from '$lib/stores/messageStore';

	let email = '';

	async function subscribe() {
		console.log('subscribe');
		const response = await fetch('/api/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		});

		const result = await response.json();

		if (response.ok) {
			setSuccess(result.message);
			email = '';
		} else {
			setError(`Error: ${result.error}`);
		}
	}
</script>

<footer>
	<div class="w-[100%] h-[905px] bg-[#0a0f16] pt-[330px] flex justify-center relative">
		<div
			class="absolute top-[-190px] z-[10 bg-[#28483A] w-[1290px] h-[346px] flex justify-center"
			style="transform: rotate(-1.5deg);"
		>
			<div
				class="w-[1280px] h-[346px] bg-[#f9f9f9] flex justify-center items-center relative overflow-hidden"
				style="transform: rotate(1.5deg);"
			>
				<div class="w-[1120px] h-[126px] flex flex-row justify-between items-center">
					<img
						class="absolute left-[80px] top-[-30px]"
						src={newsletter_shape1}
						loading="lazy"
						alt=""
					/>
					<h2 class="w-[535px] font-bold leading-[1.17] text-[54px] text-[#0c1523]">
						Subscribe To The Newsletter
					</h2>
					<form
						on:submit|preventDefault={subscribe}
						class="flex flex-row w-[441px] h-[65px] items-center relative"
					>
						<input
							class="border-[#b0a6a6] focus:border-[#28483A] focus:outline-none transition duration-300 pt-[19px] pb-[19px] pr-[130px] pl-[20px] w-[100%] h-[100%] border-solid border-[1px] rounded-[6px] text-[#333] text-[14px] leading-[1.42857] bg-[#0000]"
							type="email"
							bind:value={email}
							placeholder="Enter Your Email.."
						/>
						<button
							type="submit"
							class="absolute w-[121px] h-[48px] flex justify-center items-center text-[16px] font-semibold bg-[#28483A] text-[#fff] rounded-[10px] cursor-pointer right-[8px] hover:bg-[#0c1523] transition duration-300"
						>
							Subscribe
						</button>
					</form>
					<img
						class="absolute bottom-[-145px] right-[120px]"
						src={newsletter_shape2}
						loading="lazy"
						alt=""
					/>
				</div>
			</div>
		</div>
		<div class="text-[#d4cdcd] w-[1290px] h-[444px] flex flex-row justify-between">
			<div class="w-[375px]">
				<img
					class="h-[80px] object-cover mb-[40px]"
					src={logo_white}
					loading="lazy"
					alt=""
				/>
				<h2 class="text-[21px] leading-[1.62] mb-[25px]">
					Neobyte Design is one of the leading website design agencies, driving creative and
					cutting-edge web solutions.
				</h2>
				<div class="flex flex-row mb-[25px] gap-[15px]">
					<img src={phone_icon} loading="lazy" alt="" />
					<a
						href="tel:+959459170740"
						class="text-[#fff] opacity-[0.7] hover:opacity-[1] transition duration-300"
						>+959459170740</a
					>
				</div>
				<div class="flex flex-row mb-[25px] gap-[15px]">
					<img src={message_icon} loading="lazy" alt="" />
					<a
						href="mailto:neobytedesign@gmail.com"
						class="text-[#fff] opacity-[0.7] hover:opacity-[1] transition duration-300"
						>neobytedesign@gmail.com</a
					>
				</div>
				<div class="flex flex-row gap-[10px]">
					<a
						target="_blank"
						href="https://www.facebook.com/neobytedesign"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#28483A] hover:border-[#28483A] transition duration-300"
					>
						<img src={facebook_icon} loading="lazy" alt="" />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/company/neobyte-design/"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#28483A] hover:border-[#28483A] transition duration-300"
					>
						<img src={linkedin_icon} loading="lazy" alt="" />
					</a>
					<a
						target="_blank"
						href="viber://chat?number=+959459170740"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#28483A] hover:border-[#28483A] transition duration-300"
					>
						<img src={viber_icon} loading="lazy" alt="" />
					</a>
				</div>
			</div>
			<div class="w-[785px] flex flex-row justify-between">
				<div></div>
				<div class="flex flex-col gap-[20px] mt-[15px]">
					<h3 class="mb-[20px] text-[#fff] text-[24px] font-semibold leading-[1.375]">
						Quick Links
					</h3>
					<a class="hover:text-[#fff] transition duration-300" href="/">Home Page</a>
					<a class="hover:text-[#fff] transition duration-300" href="/services">Services</a>
					<a class="hover:text-[#fff] transition duration-300" href="/portfolios">Portfolios</a>
					<a class="hover:text-[#fff] transition duration-300" href="/about-me">About Me</a>
					<a class="hover:text-[#fff] transition duration-300" href="/blogs">Blog</a>
					<a class="hover:text-[#fff] transition duration-300" href="/contact-me">Contact Me</a>
				</div>
				<div class="flex flex-col gap-[20px] mt-[15px]">
					<h3 class="mb-[20px] text-[#fff] text-[24px] font-semibold leading-[1.375]">Legal</h3>
					<a class="hover:text-[#fff] transition duration-300" href="/refund-policy"
						>Refund Policy</a
					>
					<a class="hover:text-[#fff] transition duration-300" href="/privacy-policy"
						>Privacy Policy</a
					>
					<a class="hover:text-[#fff] transition duration-300" href="/terms-conditions"
						>Terms & Conditions</a
					>
				</div>
				<div></div>
			</div>
		</div>
	</div>
	<div
		class="w-[100%] h-[93px] bg-[#151c25] flex justify-center items-center text-[#fff] font-medium text-[18px] leading-[1.28]"
	>
		Copyright © 2024 Neobyte Design. All rights reserved.
	</div>
</footer>
