<template>
    <div class="bg-zinc-950 border-t-4 border-zinc-900 text-white">
        <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div class="xl: grid xl:grid-cols-3 xl:gap-8">
                <img class=" h-28" src="../assets/logo_transparent.png"/>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6">Website</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <span class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-if="$route.path === '/en'" v-on:click="start_scroll">Home</span>
                                    <span class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-else v-on:click="start_scroll">Start</span>
                                </li>
                                <li>
                                    <span class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-on:click="portfolio_scroll">Portfolio</span>
                                </li>
                                <li>
                                    <span class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-if="$route.path === '/en'">Services</span>
                                    <span class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-else v-on:click="services_scroll">Leistungen</span>
                                </li>
                                <li>
                                    <router-link class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" to="/contact" v-if="$route.path === '/en'">Contact</router-link>
                                    <router-link class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer" v-else to="/contact">Kontakt</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6">Support</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" v-if="$route.path === '/en'">Paying methods</a>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" v-else href="">Zahlungsmethoden</a>
                                </li>          
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="">Sitemap</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="">Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6" v-if="$route.path === '/en'">Social Media</h3>
                            <h3 class="text-sm font-semibold leading-6" v-else>Soziale Medien</h3>        
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="https://www.instagram.com/ferbion_web/ target=" target="_blank">Instagram</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="https://www.youtube.com/channel/UC-UchX30BaknW8U25JiSgDA" target="_blank">Youtube</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="https://www.tiktok.com/@ferbionweb" target="_blank">Tiktok</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="https://twitter.com/FerbionWeb" target="_blank">X / Twitter</a>
                                </li>
                                <li>
                                    <a class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" href="" target="_blank">Facebook</a>
                                </li>
                            </ul>       
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6">Rechtliches</h3>
                            <ul class="mt-6 space-y-4" role="list">
                                <li>
                                    <router-link class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" to="/impressum" v-on:click="impressum_change">Impressum</router-link>
                                </li>
                                <li>
                                    <router-link class="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition" to="/datenschutz">Datenschutz</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

function start_scroll (event) {
    document.getElementById("start").scrollIntoView({behavior: 'smooth'});
}
function services_scroll (event) {
    document.getElementById("services").scrollIntoView({behavior: 'smooth'});
}
function portfolio_scroll (event) {
    document.getElementById("portfolio").scrollIntoView({behavior: 'smooth'});
}
</script>
