<script lang="ts">
    import logo from '$lib/images/logo.png'
</script>

<div class="w-[100%] h-[950px] flex justify-center">
    <header class="mt-[50px] flex flex-row justify-between items-center w-[1290px] h-[80px]">
        <div>
            <a href="/">
                <img class="w-[195px] h-[80px] object-cover" src={logo} alt="">
            </a>
        </div>
        <nav class="flex flex-row gap-[50px] text-[18px] font-medium leading-[1.28]">
            <a class="transition duration-300 hover:text-[#432cf3]" href="/">Home</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/services">Services</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/portfolios">Portfolios</a>
            <a class="text-[#432cf3]" href="/about-me">About Me</a>
            <a class="transition duration-300 hover:text-[#432cf3]" href="/blogs">Blogs</a>
        </nav>
        <div class="bg-[#0c1523] text-[#fff] rounded-[10px] text-[18px] font-bold cursor-pointer w-[165px] h-[55px] flex justify-center items-center hover:bg-[#432cf3] transition duration-300">
            Contact Us
        </div>
    </header>
</div>


