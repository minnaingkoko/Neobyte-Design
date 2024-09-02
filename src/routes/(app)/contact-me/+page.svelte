<script lang="ts">
	import Header from '../../../components/Header.svelte';

	let firstName = '';
	let lastName = '';
	$: name = firstName + ' ' + lastName;
	let email = '';
	let subject = '';
	let message = '';

	async function handleSubmit(event) {
		event.preventDefault();

		const res = await fetch('/contact-me', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, message })
		});

		if (res.ok) {
			alert('Message sent!');
		} else {
			alert('Failed to send message.');
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
							class="pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="First Name"
              bind:value={firstName}
						/>
						<input
							class="pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="Last Name"
              bind:value={lastName}
						/>
					</div>
					<div class="flex flex-row gap-[20px]">
						<input
							class="pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="email"
							placeholder="Email"
							bind:value={email}
						/>
						<input
							class="pl-[20px] w-[300px] h-[65px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
							type="text"
							placeholder="Subject"
							bind:value={subject}
						/>
					</div>
					<textarea
						class="pl-[20px] pt-[20px] w-[620px] h-[256px] rounded-[8px] bg-[#fcfcfc] text-[#646465] border-solid border-[1px] border-[#eaecef]"
						placeholder="Your Message"
						bind:value={message}
					></textarea>
					<button
						class="w-[174px] h-[65px] bg-[#0c1523] text-[#fff] rounded-[10px] leading-[1.4] font-bold text-[18px] flex justify-center items-center mt-[40px]" type="submit"
						>Send Message</button
					>
				</form>
			</div>
			<div class="w-[550px] h-[100%] bg-[#0c1523] rounded-tr-[10px] rounded-br-[10px]"></div>
		</div>
	</div>
</div>
<div class="w-[100%] flex flex-col items-center h-[835px] pb-[140px] mb-[140px]">
	<h2 class="mb-[35px] text-[54px] font-bold leading-[1.17]">Frequently asked questions</h2>
	<p class="w-[685px] text-[#585858] text-[21px] leading-[1.62] text-center">
		Welcome to our Frequently Asked Questions (FAQ) section! Here, we have compiled a list of
		commonly asked questions to provide you with quick and helpful answers.
	</p>
</div>
