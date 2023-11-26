<template>
    <div class="bg-[#191d1e] pb-[250px]">
        <div class="pt-[50px] pl-[100px]">
            <span class="text-[#01a7ee] uppercase font-bold text-xl">contact</span>
        </div>
        <div class="flex flex-row gap-[500px] items-start">
            <div class="flex flex-col gap-[35px] pl-[100px] pt-[150px]">
                <div>
                    <input class="bg-[#272d30] rounded-[10px] h-[35px] w-[500px] pl-3" placeholder="Full Name">
                </div>
                <div>
                    <input class="bg-[#272d30] rounded-[10px] h-[35px] w-[500px] pl-3" placeholder="Email">
                </div>
                <div>
                    <label class="text-white" for="type">
                        <select class="bg-[#272d30] w-[250px] h-[35px] rounded-[10px] pl-3" id="type" name="type">
                            <option value="select">Select Type</option>
                            <option value="quesions">Questions</option>
                            <option value="bewerbung">Bewerbung</option>
                            <option value="request">Anfrage</option>
                            <option value="order">Auftrag</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input class="bg-[#272d30] rounded-[10px] h-[250px] w-[500px] pl-3" placeholder="Message">
                </div>
                <div class="pl-[200px]">
                    <div class="bg-[#e69700] rounded-[15px] text-center w-[125px] h-[30px] flex justify-center items-center text-black text-xl">Attach Files</div>
                </div>
                <div class="pl-[175px] pt-10">
                    <div class="bg-[#e69700] rounded-[15px] text-center w-[175px] h-[40px] flex justify-center items-center uppercase text-black font-bold text-3xl">contact</div>
                </div>
            </div>
            <div class="mt-[130px]">
                <div class="flex flex-col gap-[50px]">
                    <span class="text-white italic text-4xl">We are happy to help<br>
                    <span class="text-[#01a7ee]">strengthen your business!</span>
                    </span>
                    <div>
                        <span class="text-[#01a7ee] font-bold text-6xl">Get in touch <span class="text-white">with us.</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>