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
              <a href="#start" class="text-[#00a8f0] text-lg font-semibold leading-6">Home</a>
            </li>
            <li class="list-none">
              <a href="#about" class="text-lg font-semibold leading-6">Über uns</a>
            </li>
            <li class="list-none ">
              <a href="#services" class="text-lg font-semibold leading-6">Dienste</a>
            </li>
          </ul>
        </div>
        <div class="hidden sm:block relative mt-[-3%]">
          <img class="h-[90px] w-[190px] lg:hover:scale-110 duration-300 transition" src="../assets/logo_transparent.png"> 
        </div>
        <div class="">
          <ul class="flex flex-col sm:flex-row gap-10 sm:pl-[150px]">
            <li class="list-none">
              <a href="#projects" class="text-lg font-semibold leading-6">Portfolio</a>
            </li>
            <li class="list-none">
              <a href="#contact" class="text-lg font-semibold leading-6">Kontakt</a>
            </li>
            <li class="list-none">
              <a class="text-lg font-semibold leading-6">Impressum</a>
            </li>
          </ul>
          </div>
          </div>
        </nav>
      </header>
      <div class="relative">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <div class="mt-24 text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl">
                <h1>Wir erstellen</h1>
                <h1>professionelle Websites</h1>
              </div>
              <div class="mt-10 flex items-center gap-x-6">
                <a class="bg-[#00a8f0] rounded-full p-2 text-lg px-3 text-white" href="">
                  Textidee?
                </a>
                <a class="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition" href="">
                  Mehr erfahren
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img class=" aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" 
            height="2180" style="color: transparent;"
            src="../assets/Mockup.png" />
          </div>
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
