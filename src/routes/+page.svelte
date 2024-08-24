<script lang="ts">
    import logo from '$lib/images/logo.png';
    import hero from '$lib/images/hero-img.jpg';
    import hero_shape from '$lib/images/hero-shape.png';
	import Footer from "../components/Footer.svelte";
</script>

<div class="bg-[url('/background.jpg')] w-[100%] h-[915px] flex flex-col items-center">
    <header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
        <div>
            <a href="/">
                <img class="w-[195px] h-[80px] object-cover" src={logo} alt="">
            </a>
        </div>
        <nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
            <a class="text-[#71b095]" href="/">Home</a>
            <a class="transition duration-300 hover:text-[#71b095]" href="/services">Services</a>
            <a class="transition duration-300 hover:text-[#71b095]" href="/portfolios">Portfolios</a>
            <a class="transition duration-300 hover:text-[#71b095]" href="/about-me">About Me</a>
            <a class="transition duration-300 hover:text-[#71b095]" href="/blogs">Blogs</a>
        </nav>
        <a href="/contact-me" class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#71b095] transition duration-300">
            Contact Me
        </a>
    </header>
    <div class="w-[100%] h-[760px] relative flex flex-row justify-center">
        <div class="flex flex-row gap-[45px] w-[1290px] h-[760px] mt-[25px]">
            <div class="flex flex-col pt-[30px]">
                <h1 class="w-[710px] text-[80px] font-bold mb-[30px] text-[#0c1523]">Building Websites that Elevate Your Brand</h1>
                <p class="w-[610px] text-[21px] leading-[1.62]">From concept to launch, I design websites that engage, inspire, and convert, helping your business grow online.</p>
                <a href="/contact-me" class="w-[174px] h-[65px] mt-[50px] bg-[#71b095] text-[#fff] flex justify-center items-center rounded-[10px] text-[18px] font-bold leading-[1.4] cursor-pointer hover:bg-[#0c1523] transition duration-300">
                    Get Started
                </a>
            </div>
            <div class="h-[760px] absolute right-0">
                <div class="relative">
                    <img class="w-[660px] h-[760px] object-cover rounded-tl-[100px] relative z-[10]" src={hero} alt="">
                    <img class="absolute bottom-[65px] left-[-90px] z-[0]" src={hero_shape} alt="">
                </div>
            </div>            
        </div>
    </div>
</div>
<div class="w-[100%] h-[500px]">
    Test
</div>

<Footer />