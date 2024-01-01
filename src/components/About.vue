<template>
    <div class="pt-16 sm:pt-32 bg-[#000000] text-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl lg:text-center">
                <h2 class="text-base font-semibold leading-7 text-[#01a7ee]">Unsere Leistungen</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Alles was eine professionelle Webseite braucht.
                </p>
                <p class="mt-6 text-lg leading-8 text-zinc-400 text-justify">
                    Wir sind eine Web-Agentur bestehend aus zwei Personen, die professionelle Websites nicht nur,
                    designet und SEO maximiert, sondern auch Websites entwickelt. Bei uns haben Sie die Möglichkeit, 
                    eine individuell gestaltete Website zu einem fairen Preis erstellen zu lassen. Unsere Lösungen
                    sind zudem auf Nachhaltigkeit und Zukunftsfähigkeit ausgerichtet.
                </p>
            </div>    
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div class="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                        <dt class="flex items-center gap-x-3 text-base font-semibold leading-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 flex-none text-[#01a7ee]">
                                <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25
                                11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25
                                2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z">
                                </path>
                            </svg>   
                            Web-Design  
                        </dt>   
                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7">
                            <p class="flex-auto">
                                Hochwertiges und benutzerfreundliches Design für optimales Nutzererlebnis.
                            </p>
                        </dd>   
                    </div>
                    <div class="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                        <dt class="flex items-center gap-x-3 text-base font-semibold leading-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 flex-none text-[#01a7ee]">
                                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7
                                 7 0 012 9z" clip-rule="evenodd">
                                </path>
                            </svg>   
                            Suchmaschienenoptimierung
                        </dt>   
                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7">
                            <p class="flex-auto">
                                SEO gemäß Google-Standars für langfristige Erfolge.
                            </p>
                        </dd>   
                    </div>
                    <div class="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                        <dt class="flex items-center gap-x-3 text-base font-semibold leading-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 text-[#01a7ee]" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 
                                3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147
                                3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                            Web-Entwicklung
                        </dt>   
                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7">
                            <p class="flex-auto">
                                Hochwertige und moderne Entwicklung Ihrer neuen Webseite.
                            </p>
                        </dd>   
                    </div>
                </dl>    
            </div>        
        </div>
    </div>
</template>

<template>
    <div class="bg-[#000000] text-white">
      <div class="flex pl-[7.5%] px-4 py-3 sm:p-0">
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-white pt-4 pl-4">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'grid' : 'hidden'" class="hidden md:flex justify-center mx-auto max-w-7xl">
        <ul class="flex flex-col md:flex-row space-x-8 justify-center items-center max-[884px]:pt-8">
          <li>
            <span class="text-lg font-semibold leading-6">Home</span>
          </li>
          <li>
            <span class="text-lg font-semibold leading-6">Über uns</span>
          </li>
          <li>
            <span class="text-lg font-semibold leading-6">Leistungen</span>
          </li>
          <div class="hidden min-[884px]:block">
            <img class="h-[100px]" src="../assets/logo_transparent.png">
          </div>
          <li>
            <span class="text-lg font-semibold leading-6">Portfolio</span>
          </li>
          <li>
            <span class="text-lg font-semibold leading-6">Kontakt</span>
          </li>
          <li>
            <span class="text-lg font-semibold leading-6">Impressum</span>
          </li>
        </ul>
      </nav>
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