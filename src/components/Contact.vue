<template>
    <body class="bg-[#000000] text-white">
        <div class="relative">
            <div class="pb-23 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div class="px-6 lg:px-8">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 class="text-3xl font-bold tracking-tight">Lass uns zusammenarbeiten</h2>
                        <p class="mt-2 text-lg leading-8 text-zinc-400">
                            Kontaktieren Sie uns und wir werden uns schnellstmöglich bei Ihnen melden.
                        </p>
                        <form class="mt-16">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label class="block text-sm font-semibold leading-6" for="first-name">Vorname</label>
                                    <div class="mt-2">
                                        <input id="first_name" class="block w-full rounded-md bg-zinc-950 border-zinc-900 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#00a8f0] sm:text-sm sm:leading-6"
                                        autocomplete="given-name" type="text" name="first-name" />  
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold leading-6" for="last-name">Nachname</label>
                                    <div class="mt-2">
                                        <input id="last_name" class="block w-full rounded-md bg-zinc-950 border-zinc-900 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#00a8f0] sm:text-sm sm:leading-6"
                                        autocomplete="given-name" type="text" name="last-name" />  
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label class="block text-sm font-semibold leading-6" for="email">Email</label>
                                    <div class="mt-2.5">
                                        <input id="email" class="block w-full rounded-md bg-zinc-950 border-2 border-zinc-900 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#00a8f0] sm:text-sm sm:leading-6"
                                        autocomplete="email" type="email" name="email">
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <div class="flex justify-between text-sm leading-6">
                                        <label class="block text-sm font-semibold leading-6" for="message">Ein paar Worte über Ihre Anfrage</label>
                                        <p id="contact_description" class="text-zinc-400">Max 500 characters</p>
                                    </div>
                                    <div class="mt-2.5">
                                        <textarea id="message" class="block w-full rounded-md bg-zinc-950 border-2 border-zinc-900 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#00a8f0] sm:text-sm sm:leading-6"
                                        name="message" rows="4" aria-describedby="contact-description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center mt-10">
                                <button id="btn_privacy" class="bg-zinc-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#00a8f0] focus:ring-offset-2" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" v-on:click="button_clicked">
                                    <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                </button>
                                <span class="ml-3 text-sm" id="headlessui-label-:r2:" for="">
                                    <span class="font-medium">Hiermit stimme ich den Datenschutzbestimmungen zu.</span>
                                </span>
                            </div>
                            <div class="mt-10 flex justify-end border-t border-zinc-900 pt-8">
                                <button type="submit" class="text-white rounded-md bg-[#00a8f0] px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cornflower-blue-600">Anfrage senden</button>      
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#000000] text-white py-32 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl space-y-16 divide-y divide-zinc-100 lg:mx-0 lg:max-w-none">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight">Kontakt</h2>
                            <p class="mt-4 leading-7 text-zinc-400">
                                Das Team von Ferbion steht Ihnen jederzeit zur Verfügung.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div class="rounded-2xl bg-zinc-950 border-2 border-zinc-900 p-10">
                                <h3 class="text-base font-semibold leading-7">Linus Ehle</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-zinc-400">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd>
                                            <a class="font-semibold text-[#00a8f0]" href="mailto:linusehle@ferbion.com">linusehle@ferbion.com</a>
                                        </dd>
                                        <div class="mt-1">
                                            <dt class="sr-only">Position</dt>
                                            <dd>Web-Entwicklung, IT Bereich</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div class="rounded-2xl bg-zinc-950 border-2 border-zinc-900 p-10">
                                <h3 class="text-base font-semibold leading-7">Ben-Luca Gering</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-zinc-400">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd>
                                            <a class="font-semibold text-[#00a8f0]" href="mailto:benlucagering@ferbion.com">benlucagering@ferbion.com</a>
                                        </dd>
                                        <div class="mt-1">
                                            <dt class="sr-only">Position</dt>
                                            <dd>Socialmediamanagment, Design Bereich</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>

</script>