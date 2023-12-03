<template class="scroll-smooth">
  <div id="start" class="h-screen bg-[#272d30]">
        <header class="bg-[#272d30] sm:flex sm:justify-center pt-10">
        <div class="flex pl-[7.5%] px-4 py-3 sm:p-0">
          <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-white">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
        </div>
        <nav :class="isOpen ? 'flex' : 'hidden'" class="flex-col px-2 pt-2 pb-4 sm:flex justify-center sm:p-0">
          <div class="flex flex-col pl-[7.5%] gap-10 sm:flex-row sm:pl-0 sm:justify-center">
            <div class="">
            <ul class="flex flex-col sm:flex-row gap-10 sm:pr-[150px]">
            <li class="list-none">
              <a href="#start" class="text-[#00a8f0] uppercase cursor-pointer">start</a>
            </li>
            <li class="list-none">
              <a href="#about" class="text-white uppercase cursor-pointer hover:text-[#00a8f0] duration-150 transition">über uns</a>
            </li>
            <li class="list-none ">
              <a href="#services" class="text-white uppercase cursor-pointer hover:text-[#00a8f0] duration-150 transition">dienste</a>
            </li>
          </ul>
        </div>
        <div class="hidden sm:block relative mt-[-1.6%]">
          <img class="h-[90px] w-[190px] lg:hover:scale-110 duration-300 transition" src="../assets/Logo.png"> 
        </div>
        <div class="">
          <ul class="flex flex-col sm:flex-row gap-10 sm:pl-[150px]">
            <li class="list-none">
              <a href="#projects" class="text-white uppercase cursor-pointer hover:text-[#00a8f0] duration-150 transition">projekte</a>
            </li>
            <li class="list-none">
              <a href="#contact" class="text-white uppercase cursor-pointer hover:text-[#00a8f0] duration-150 transition">kontakt</a>
            </li>
            <li class="list-none">
              <a class="text-white uppercase cursor-pointer hover:text-[#00a8f0] duration-150 transition">impressum</a>
            </li>
          </ul>
          </div>
          </div>
        </nav>
      </header>
       <div class="flex mt-[7%] ml-[7.5%]">
        <div class="flex flex-col gap-6">
        <div>
          <h2 class="text-white font-bold text-5xl">Sie brauchen eine <span class="text-[#00a8f0]">Website?</span><br>Wir helfen Ihnen!</h2>
        </div>
        <div>
          <span class="text-white text-xl mt-5">Bereits über <span class="text-[#00a8f0]">+80 </span>glückliche Kunden!</span>
        </div>
        <div class="">
        <div class="flex ">
          <a href="#about"><button class="bg-[#e69700] uppercase rounded-[15px] w-[375px] h-[50px] text-3xl font-bold mt-10 lg:hover:scale-110 hover:text-white transition duration-300">Schauen Sie sich um</button></a>
        </div>
       </div>
       </div>
       <div class="absolute ml-[20%] mt-[-5%]">
        <img class="hidden lg:h-[1000px] lg:w-[2000px] lg:block" src="../assets/Mockup3.png">
       </div>
       </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
