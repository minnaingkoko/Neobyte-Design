<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import Header from '../../../../components/Header.svelte';
	export let data;
</script>

<div class="w-[100%] h-[950px] flex justify-center">
    <Header />
</div>
<div>{@html data.post.content}</div>


