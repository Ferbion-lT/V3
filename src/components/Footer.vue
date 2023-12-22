<template>
    <div class="bg-zinc-950 border-t-4 border-zinc-900 text-white">
        <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div class="xl: grid xl:grid-cols-3 xl:gap-8">
                <img class=" h-28" src="../assets/logo_transparent.png"/>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6">Webseite</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Start</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Portfolio</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Leistungen</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6">Support</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Zahlungsmethoden</a>
                                </li>          
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Sitemap</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6">Soziale Medien</h3>        
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Instagram</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Youtube</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Tiktok</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">X / Twitter</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Facebook</a>
                                </li>
                            </ul>       
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6">Rechtliches</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Impressum</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">Datenschutz</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400" href="">AGB</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD
    <div class="flex justify-center items-center bg-[#191d1e] z-10 pt-12">
        <div id="popup_datenschutz" class="hidden justify-center items-center bg-[#191d1e]">
            <div class="">
                <span class="close" v-on:click="close_datenschutz">&times;</span>
                <div class="bg-[#191d1e] flex flex-col lg:flex-row justify-center gap-[150px]">
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[400px] flex flex-col justify-center pt-10 gap-6">
                            <span class="text-[#adadad] font-bold uppercase text-3xl text-center">unser datenschutz</span>
                            <a class="text-center text-[#adadad] text-xl" href="" download="../assets/Datenschutz-Erklaerung.pdf">
                                zum Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center bg-[#191d1e] z-10 pt-12">
        <div id="popup_privatsphäre" class="hidden justify-center items-center bg-[#191d1e]">
            <div class="">
                <span class="close" v-on:click="close_privatsphäre">&times;</span>
                <div class="bg-[#191d1e] flex flex-col lg:flex-row justify-center gap-[150px]">
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[400px] flex flex-col justify-center">
                            <span class="text-[#adadad] text-3xl uppercase text-center font-bold">coming soon...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center bg-[#191d1e] z-10 pt-12">
        <div id="popup_cookies" class="hidden justify-center items-center bg-[#191d1e]">
            <div class="">
                <span class="close" v-on:click="close_cookies">&times;</span>
                <div class="bg-[#191d1e] flex flex-col lg:flex-row justify-center gap-[150px]">
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[450px] flex items-center pl-5">
                            <span class="text-[#adadad] text-xl flex flex-col gap-7">
                            <span class="font-bold">Cookie Hinweis:</span>
                            <span>Diese Website verwendet Cookies für eine bessere Nutzererfahrung.
                            Durch die Nutzung erklären Sie sich damit einverstanden
                            Einstellungen können im Browser angepasst werden.
                            Details finden Sie in unserer Datenschutzrichtlinie.</span>
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[450px] flex items-center pl-5">
                            <span class="text-[#adadad] text-xl flex flex-col gap-7">
                            <span class="font-bold">Arten von Cookies, die wir verwenden:</span>
                            <span class="flex flex-col gap-2">
                                <span class="font-bold">Notwendige Cookies:</span>
                                <span>Für grundlegende Funktionen, können nicht deaktiviert werden.</span>
                                <span class="font-bold">Analytische Cookies:</span>
                                <span>Messen die Nutzung und verbessern helfen zur Verbesserung der Webseite</span>
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#191d1e] flex justify-center pt-10 gap-[35%] pb-[75px]">
        <div class="flex flex-col justify-center">
            <div class="transition duration-300 lg:hover:scale-110">
                <h3 class="text-white font-semibold leading-8 text-xl pb-4">Rechtliches</h3>
                <ul class="border-l-2 border-[#01a7ee] pl-4">
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="impressum">Impressum</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="datenschutz">Datenschutz</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="privatsphäre">Privatsphäre</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="cookies">Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <div class="transition duration-300 lg:hover:scale-110">
                <h3 class="text-white font-semibold leading-8 text-xl pb-4">Webseite</h3>
                <ul class="border-r-2 border-[#01a7ee] pr-4">
                    <li class="list-none">
                        <a href="#start" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Start</a>
                    </li>
                    <li class="list-none">
                        <a href="#about" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Über uns</a>
                    </li>
                    <li class="list-none">
                        <a href="#projects" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Portfolio</a>
                    </li>
                    <li class="list-none">
                        <a href="#contact" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg-[#191d1e] flex justify-center"  id="scroll_popups">
        <div class="bg-[#272d30] w-[200px] flex justify-center rounded-t-[15px]">
            <img class="h-[75px]" src="../assets/Logo.png" />
        </div>
    </div>
</template>

<script setup>

function impressum (event) {
    document.getElementById("popup_impressum").style.display = "flex";
    document.getElementById("scroll_popups").scrollIntoView({behavior: "smooth"});
}
function close_impressum (event) {
    document.getElementById("popup_impressum").style.display = "none";
}

function datenschutz (event) {
    document.getElementById("popup_datenschutz").style.display = "flex";
    document.getElementById("scroll_popups").scrollIntoView({behavior: "smooth"});
}
function close_datenschutz (event) {
    document.getElementById("popup_datenschutz").style.display = "none";
}

function privatsphäre (event) {
    document.getElementById("popup_privatsphäre").style.display = "flex";
    document.getElementById("scroll_popups").scrollIntoView({behavior: 'smooth'});
}
function close_privatsphäre (event) {
    document.getElementById("popup_privatsphäre").style.display = "none";
}

function cookies (event) {
    document.getElementById("popup_cookies").style.display = "flex";
    document.getElementById("scroll_popups").scrollIntoView({behavior: 'smooth'});
}
function close_cookies (event) {
    document.getElementById("popup_cookies").style.display = "none";
}
</script>

<style>

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}
</style>
=======
</template>
>>>>>>> 9a2fa6770038adb592f35d866af3153a8232634f
