<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
</script>
  
<slot />

<Footer />

<style lang="postcss">
	:global(body) {
		background-color: #fff;
		color: #0c1523;
		font-family: "Plus Jakarta Sans", sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.28;
	}
</style>