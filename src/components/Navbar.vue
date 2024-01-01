<template>
<<<<<<< HEAD
  <div class="bg-[#000000] text-white">
    <nav class="mx-auto max-w-7xl">
      <ul></ul>
    </nav>
  </div>
</template>
=======
  <header class="bg-zinc-950 text-white md:flex md:justify-center md:items-center">
    <div class="flex items-center justify-between px-4 pb-4 py-3 sm:p-0">
      <div class="pt-4 pl-4 pb-4 md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'flex' : 'hidden'" class="md:flex">
      <ul class="flex text-center w-full flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-center md:items-center max-[884px]:pt-8 pb-4">
          <li>
            <router-link class="text-lg font-semibold leading-6 hover:text-[#00a8f0]" :class="{'text-[#00a8f0]': $route.path === '/'}" to="/">Home</router-link>
          </li>
          <li>
            <span class="text-lg font-semibold leading-6 hover:text-[#00a8f0] cursor-pointer transition" v-on:click="about_scroll">Über uns</span>
          </li>
          <li>
            <span class="text-lg font-semibold left-6 hover:text-[#00a8f0] cursor-pointer transition" v-on:click="services_scroll">Leistungen</span>
          </li>
          <div class="hidden min-[884px]:block">
            <img class="h-[100px]" src="../assets/logo_transparent.png">
          </div>
          <li>
            <span class="text-lg font-semibold leading-6 hover:text-[#00a8f0] cursor-pointer transition" v-on:click="portfolio_scroll">Portfolio</span>
          </li>
          <li>
            <router-link class="text-lg font-semibold leading-6 hover:text-[#00a8f0]" :class="{'text-[#00a8f0]': $route.path === '/contact'}" to="/contact">Kontakt</router-link>
          </li>
          <li>
            <router-link class="text-lg font-semibold leading-6 hover:text-[#00a8f0]" :class="{'text-[#00a8f0]': $route.path === '/impressum'}" to="/impressum">Impressum</router-link>
          </li>
        </ul>
    </nav>
  </header>
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
<script setup>
function about_scroll (event) {
  document.getElementById("leistungen").scrollIntoView({behavior: 'smooth'})
}
function services_scroll (event) {
  document.getElementById("services").scrollIntoView({behavior: 'smooth'})
}
function portfolio_scroll (event) {
  document.getElementById("portfolio").scrollIntoView({behavior: 'smooth'})
}
</script>
>>>>>>> 14e4afe8631f74ab1e6f0c590c5de1a9df174e7e
