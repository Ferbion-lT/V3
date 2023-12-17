<template>
    <div class="bg-[#191d1e] flex justify-center pt-[100px]">
        <div class="flex flex-col border-t-2 border-[#01a7ee]">
            <div class="pt-[100px] text-center">
                <span class="uppercase text-[#515151] font-bold text-5xl">Folgen Sie uns!</span>
            </div>
            <div class="flex flex-row gap-5 pt-[50px] justify-center">
                <div class="h-[50px] w-[50px] rounded-md bg-[#515151] flex justify-center items-center transition duration-150 lg:hover:scale-110 hover:bg-neutral-500">
                    <a href="https://www.instagram.com/ferbion_web/" target="_blank">
                        <img class="h-[25px] w-[25px]" src="../assets/Icons/instagram.png" />
                    </a>
                </div>
                <div class="h-[50px] w-[50px] rounded-md bg-[#515151] flex justify-center items-center transition duration-150 lg:hover:scale-110 hover:bg-neutral-500">
                    <a href="https://www.youtube.com/channel/UC-UchX30BaknW8U25JiSgDA" target="_blank">
                        <img class="h-[35px] w-[35px]" src="../assets/Icons/youtube.png" />
                    </a>
                </div>
                <div class="h-[50px] w-[50px] rounded-md bg-[#515151] flex justify-center items-center transition duration-150 lg:hover:scale-110 hover:bg-neutral-500">
                    <a href="https://www.tiktok.com/@ferbionweb" target="_blank">
                        <img class="h-[25px] w-[25px]" src="../assets/Icons/tik-tok.png" />
                    </a>
                </div>
                <div class="h-[50px] w-[50px] rounded-md bg-[#515151] flex justify-center items-center transition duration-150 lg:hover:scale-110 hover:bg-neutral-500">
                    <a href="https://twitter.com/FerbionWeb" target="_blank">
                        <img class="h-[25px] w-[25px]" src="../assets/Icons/twitter.png" />
                    </a>
                </div>
                <div class="h-[50px] w-[50px] rounded-md bg-[#515151] flex justify-center items-center transition duration-150 lg:hover:scale-110 hover:bg-neutral-500">
                    <a href="" target="_blank">
                        <img class="h-[25px] w-[25px]" src="../assets/Icons/facebook-app-symbol.png">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center bg-[#191d1e] z-10 pt-12">
        <div id="popup_impressum" class="hidden justify-center items-center bg-[#191d1e]">
            <div class="">
                <span class="close" v-on:click="close_impressum">&times;</span>
                <div class="bg-[#191d1e] flex flex-col lg:flex-row justify-center gap-[150px]">
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[400px] flex items-center pl-5">
                            <span class="text-[#adadad] text-xl flex flex-col">
                            <span class="font-bold">Ben-Luca Gering</span><br>
                            Am Kappellenhof 26<br>53783 Eitorf<br>
                            <span class="font-bold pt-4">Kontakt:</span><br>
                            Telefon: +49 1525 314 42 75<br>
                            Email:
                            <a class="underline hover:text-[#01a7ee]" href="mailto:benlucagering@gmail.com" >
                                benlucagering@gmail.com 
                            </a>
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="bg-[#272d30] rounded-[15px] h-[350px] w-[400px] flex items-center pl-5">
                            <span class="text-[#adadad] text-xl flex flex-col">
                            <span class="font-bold">Linus Ehle</span><br>
                            Olgastraße 88/1<br>73779 Deizisau<br>
                            <span class="font-bold pt-4">Kontakt:</span><br>
                            Telefon: +49 178 140 95 90<br>
                            Email:
                            <a class="underline hover:text-[#01a7ee]" href="mailto:benlucagering@gmail.com" >
                                linusfinn.ehle@gmail.com 
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    <div class="bg-[#191d1e] flex justify-center pt-10 gap-[35%] pb-[75px]">
        <div class="flex flex-col justify-center">
            <div class="border-l-2 border-[#01a7ee] pl-4 transition duration-300 lg:hover:scale-110">
                <ul>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="impressum">Impressum</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="datenschutz">Datenschutz</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer">Privatsphäre</a>
                    </li>
                    <li class="list-none">
                        <a class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee] cursor-pointer" v-on:click="cookies">Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <div class="border-r-2 border-[#01a7ee] pr-4 transition duration-300 lg:hover:scale-110">
                <ul>
                    <li class="list-none">
                        <a href="#start" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Start</a>
                    </li>
                    <li class="list-none">
                        <a href="#about" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Über uns</a>
                    </li>
                    <li class="list-none">
                        <a href="#projects" class="text-[#515151] underline text-lg transition duration-150 lg:hover:scale-110 hover:text-[#01a7ee]">Projekte</a>
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