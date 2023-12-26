<template class="scroll-smooth">
  <div id="start" class="bg-[#000000] text-white">
        <header class=" bg-zinc-950 border-b-4 border-zinc-900 sm:flex sm:justify-center pt-10">
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
              <router-link class="text-lg font-semibold leading-6 hover:text-[#00a8f0]" :class="{'text-[#00a8f0]': $route.path === '/'}" to="/">Home</router-link>
            </li>
            <li class="list-none">
              <a href="#about" class="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition">Über uns</a>
            </li>
            <li class="list-none ">
              <a href="#services" class="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition">Dienste</a>
            </li>
          </ul>
        </div>
        <div class="hidden sm:block relative mt-[-3%]">
          <img class="h-[90px] w-[190px] lg:hover:scale-110 duration-300 transition" src="../assets/logo_transparent.png"> 
        </div>
        <div class="">
          <ul class="flex flex-col sm:flex-row gap-10 sm:pl-[150px]">
            <li class="list-none">
              <a href="#projects" class="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition">Portfolio</a>
            </li>
            <li class="list-none">
              <a href="#contact" class="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition">Kontakt</a>
            </li>
            <li class="list-none">
              <router-link class="text-lg font-semibold leading-6 hover:text-[#00a8f0]" :class="{'text-[#00a8f0]': $route.path === '/impressum'}" to="/impressum">Impressum</router-link>
            </li>
          </ul>
          </div>
          </div>
        </nav>
      </header>
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
