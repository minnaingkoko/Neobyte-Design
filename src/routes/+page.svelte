<script lang="ts">
    import logo from '$lib/images/logo.png';
    import logo_white from '$lib/images/logo-white.png';
    import hero from '$lib/images/hero-img.jpg';
    import facebook_icon from '$lib/images/facebook-icon.svg';
    import linkedin_icon from '$lib/images/linkedin-icon.svg';
    import viber_icon from '$lib/images/viber-icon.svg';
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
    <div class="w-[100%] relative flex flex-row justify-center">
        <div class="flex flex-row gap-[45px] w-[1290px] mt-[25px]">
            <div class="mt-[10px]">
                <h1 class="w-[710px] text-[80px] font-bold mb-[30px] text-[#0c1523]">Building Websites that Elevate Your Brand</h1>
                <p class="w-[610px] text-[21px] leading-[1.62]">From concept to launch, we design websites that engage, inspire, and convert, helping your business grow online.</p>
                <div class="btn">
                    Get Started
                </div>
            </div>
            <div class="h-[795px] absolute right-0">
                <img class="w-[830px] h-[795px] object-cover rounded-tl-[100px]" src={hero} alt="">
            </div>
        </div>
    </div>
</div>
<div class="w-[100%] h-[500px]">
    Test
</div>
<footer>
    <div class="w-[100%] h-[905px] bg-[#0c1523] pt-[330px] flex justify-center">
        <div class="text-[#d4cdcd] w-[1290px] h-[444px] flex flex-row gap-[60px]">
            <div class="w-[375px]">
                <img class="w-[195px] h-[80px] object-cover mb-[40px]" src={logo_white} alt="">
                <h2 class="text-[21px] leading-[1.62] mb-[25px]">Neobyte Design is one of the leading website design agencies, driving creative and cutting-edge web solutions.</h2>
                <div></div>
                <div></div>
                <div class="flex flex-row gap-[10px]">
                    <a href="#" class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#432cf3] hover:border-[#432cf3] transition duration-300">
                        <img src={facebook_icon} alt="">
                    </a>
                    <a href="#" class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#432cf3] hover:border-[#432cf3] transition duration-300">
                        <img src={linkedin_icon} alt="">
                    </a>
                    <a href="#" class="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-solid border-[#c1c1c1] border-[1px] cursor-pointer hover:bg-[#432cf3] hover:border-[#432cf3] transition duration-300">
                        <img src={viber_icon} alt="">
                    </a>
                </div>
            </div>
            <div class="w-[785px]">
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[93px] bg-[#151c25] flex justify-center items-center text-[#fff] font-medium text-[18px] leading-[1.28]">Copyright © 2024 Neobyte Design</div>
</footer>

