<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import { setSuccess, setError } from '$lib/stores/messageStore';
	import facebook_icon from '$lib/images/facebook-icon.svg';
	import linkedin_icon from '$lib/images/linkedin-icon.svg';
	import viber_icon from '$lib/images/viber-icon.svg';
	import FaqItem from '../../../components/FAQItem.svelte';

	let firstName = '';
	let lastName = '';
	$: name = firstName + ' ' + lastName;
	let email = '';
	let subject = '';
	let message = '';

	async function handleSubmit(event) {
		event.preventDefault();

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, message, subject })
		});

		if (res.ok) {
			setSuccess('Your message has been sent.');
		} else {
			setError('Error: Failed to send message.');
		}
	}
</script>

<div class="w-[100%] h-[880px] mb-[506px] flex flex-col bg-[#f9f9f9] items-center">
	<Header />
	<div class="flex flex-col items-center w-[1290px] mt-[85px]">
		<div class="text-[#71b095] mb-[25px] text-[18px] font-bold leading-[1.28]">Contact Me</div>
		<h1 class="w-[890px] text-[66px] font-bold leading-[1.17] text-center">
			Reach Out to Us Directly for Immediate Support
		</h1>
		<div
			style="box-shadow: 0 2px 45px rgba(0, 0, 0, .05);"
			class="rounded-[10px] flex flex-row w-[1290px] h-[749px] mt-[80px] bg-[#fff]"
		>
			<div class="w-[740px] h-[100%] rounded-tl-[10px] rounded-bl-[10px]">
				<form class="flex flex-col py-[77px] px-[60px] gap-[20px]" on:submit={handleSubmit}>
					<div class="flex flex-row gap-[20px]">
						<input
							class="focus:border-[#71b095] focus:outline-none transition duration-300 pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="First Name"
							bind:value={firstName}
						/>
						<input
							class="focus:border-[#71b095] focus:outline-none transition duration-300 pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="Last Name"
							bind:value={lastName}
						/>
					</div>
					<div class="flex flex-row gap-[20px]">
						<input
							class="focus:border-[#71b095] focus:outline-none transition duration-300 pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="email"
							placeholder="Email"
							bind:value={email}
						/>
						<input
							class="focus:border-[#71b095] focus:outline-none transition duration-300 pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="Subject"
							bind:value={subject}
						/>
					</div>
					<textarea
						class="focus:border-[#71b095] focus:outline-none transition duration-300 pl-[20px] pt-[20px] w-[620px] h-[256px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
						placeholder="Your Message"
						bind:value={message}
					></textarea>
					<button
						class="w-[174px] h-[65px] bg-[#0c1523] text-[#fff] rounded-[10px] leading-[1.4] font-bold text-[18px] flex justify-center items-center mt-[40px]"
						type="submit">Send Message</button
					>
				</form>
			</div>
			<div
				class="w-[550px] h-[100%] bg-[#0c1523] text-white rounded-tr-[10px] rounded-br-[10px] px-[60px] pt-[85px] pb-[100px]"
			>
				<h2 class="mb-[20px] text-[32px] font-semibold">Contact Details</h2>
				<p class="text-[21px] leading-[1.62] mb-[45px]">
					<b>Neobyte Design</b> offers multiple ways to connect with us. Reach out through the following
					contact information for any inquiries or assistance:
				</p>
				<h4 class="mb-[20px]">Phone Number</h4>
				<a
					class="text-[#fff] opacity-[0.7] hover:opacity-[1] transition duration-300"
					href="tel:+959459170740">+959459170740</a
				>
				<h4 class="mb-[20px] mt-[45px]">Email</h4>
				<a
					class="text-[#fff] opacity-[0.7] hover:opacity-[1] transition duration-300"
					href="mailto:neobytedesign@gmail.com">neobytedesign@gmail.com</a
				>
				<div class="flex flex-row gap-[10px] mt-[70px]">
					<a
						target="_blank"
						href="https://www.facebook.com/neobytedesign"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#71b095] hover:border-[#71b095] transition duration-300"
					>
						<img src={facebook_icon} alt="" />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/company/neobyte-design/"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#71b095] hover:border-[#71b095] transition duration-300"
					>
						<img src={linkedin_icon} alt="" />
					</a>
					<a
						target="_blank"
						href="viber://chat?number=+959459170740"
						class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#71b095] hover:border-[#71b095] transition duration-300"
					>
						<img src={viber_icon} alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-[100%] flex flex-col items-center pb-[200px] mb-[200px]">
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
