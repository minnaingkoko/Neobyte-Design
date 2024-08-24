<script lang="ts">
     import logo from '$lib/images/logo.png';
</script>

<header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
    <div>
        <a href="/">
            <img class="w-[195px] h-[80px] object-cover" src={logo} alt="">
        </a>
    </div>
    <nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
        <a class="transition duration-300 hover:text-[#71b095]" href="/">Home</a>
        <a class="transition duration-300 hover:text-[#71b095]" href="/services">Services</a>
        <a class="transition duration-300 hover:text-[#71b095]" href="/portfolios">Portfolios</a>
        <a class="transition duration-300 hover:text-[#71b095]" href="/about-me">About Me</a>
        <a class="transition duration-300 hover:text-[#71b095]" href="/blogs">Blogs</a>
    </nav>
    <a href="/contact-me" class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#71b095] transition duration-300">
        Contact Me
    </a>
</header>