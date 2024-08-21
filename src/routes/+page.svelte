<script lang="ts">
    import logo from '$lib/images/logo.png'
    import hero from '$lib/images/hero-img.jpg'
</script>

<div class="bg-[url('/background.jpg')] w-[100%] h-[950px] flex flex-col items-center">
    <header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
        <div>
            <a href="/">
                <img class="w-[195px] h-[80px] object-cover" src={logo} alt="">
            </a>
        </div>
        <nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
            <a class="text-[#432cf3]" href="/">Home</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/services">Services</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/portfolios">Portfolios</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/about-me">About Me</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/blogs">Blogs</a>
        </nav>
        <div class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#432cf3] transition duration-300">
            Contact Us
        </div>
    </header>
    <div class="w-[100vw] relative flex flex-row justify-center">
        <div class="flex flex-row gap-[45px] w-[1290px] mt-[25px]">
            <div class="mt-[10px]">
                <h1 class="w-[710px] text-[80px] font-bold mb-[30px] text-[#0c1523]">Building Websites that Elevate Your Brand</h1>
                <p class="w-[610px] text-[21px] leading-[1.62]">From concept to launch, we design websites that engage, inspire, and convert, helping your business grow online.</p>
                <div class="btn">
                    Get Started
                </div>
            </div>
            <div class="h-[795px] absolute right-0">
                <img class="w-[830px] h-[795px] object-cover" src={hero} alt="">
            </div>
        </div>
    </div>
</div>


