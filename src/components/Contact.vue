<template>
    <div id="contact" class="bg-[#191d1e] pb-[250px]">
        <div class="pt-[50px] flex justify-center sm:pl-[100px] sm:block">
            <span class="text-[#01a7ee] uppercase font-bold text-xl">contact</span>
        </div>
        <div class="flex flex-col-reverse gap-[500px] sm:flex-row">
            <div class="flex flex-col gap-[35px] pt-[150px] sm:pl-[100px]">
                <div class="flex justify-center transition duration-300 lg:hover:scale-110 hover:text-white">
                    <input class="bg-[#272d30] rounded-[10px] h-[35px] w-[400px] pl-3" placeholder="Vor- und Nachname">
                </div>
                <div class="flex justify-center transition duration-300 lg:hover:scale-110 hover:text-white">
                    <input class="bg-[#272d30] rounded-[10px] h-[35px] w-[400px] pl-3" placeholder="Email">
                </div>
                <div class="flex justify-center">
                    <label class="text-white" for="type">
                        <select class="bg-[#272d30] w-[400px] h-[35px] rounded-[10px] pl-3" id="type" name="type">
                            <option value="select">Betreff</option>
                            <option value="quesions">Fragen</option>
                            <option value="bewerbung">Bewerbungen</option>
                            <option value="request">Anfrage</option>
                            <option value="order">Auftrag</option>
                        </select>
                    </label>
                </div>
                <div class="flex justify-center transition duration-300 lg:hover:scale-110 hover:text-white">
                    <input class="bg-[#272d30] rounded-[10px] h-[250px] w-[400px] pl-3" placeholder="Nachricht">
                </div>
                <div class="flex justify-center">
                    <a href="#"><div class="bg-[#e69700] rounded-[15px] text-center w-[200px] h-[30px] flex justify-center items-center text-black text-xl transition duration-150 hover:scale-110 hover:text-white">Datein anhängen</div></a>
                </div>
                <div class="flex justify-center pt-10">
                    <a href="#"><div class="bg-[#e69700] rounded-[15px] text-center w-[175px] h-[40px] flex justify-center items-center uppercase text-black font-bold text-3xl transition duration-300 hover:scale-110 hover:text-white">Senden</div></a>
                </div>
            </div>
            <div class="mt-[130px]">
                <div class="flex flex-col gap-[50px] justify-center">
                    <span class="text-white italic text-4xl text-center">Wir freuen uns sehr, Ihr <br>
                    <span class="text-[#01a7ee]">Buisness zu stärken</span>
                    </span>
                    <div class="flex">
                        <span class="text-[#01a7ee] font-bold text-6xl text-center">Treten Sie mit uns <br><span class="text-white">in Kontakt.</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
