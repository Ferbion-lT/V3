<template>
    <div>
        <div class="bg-[#191d1e]">
            <div class="pl-[100px]">
                <span class="text-[#01a7ee] uppercase font-bold text-xl">contact</span>
            </div>
            <div class="flex flex-col pt-6 gap-4">
                <div class="pl-[100px]">
                    <input class="text-white bg-[#272d30] rounded-[10px] h-[35px] w-[450px] pl-3 border-none" type="text" name="fullname" placeholder="Full Name">
                </div>
                <div class="pl-[100px]">
                    <input class="text-white bg-[#272d30] rounded-[10px] h-[35px] w-[450px] pl-3 border-none" type="text" name="fullname" placeholder="Email">
                </div>
                <div class="pl-[100px]">
                    <label class="bg-[#272d30] text-white rounded-[10px] h-[35px] w-[350px] border-none pl-3 flex items-center" for="type" placeholder="Select Type">             
                    <select class="bg-[#272d30]" id="type" name="type">
                        <option value="type">Select Type</option>
                        <option value="questions">Questions</option>
                        <option value="bewerbung">Bewerbung</option>
                        <option value="request">Anfrage</option>
                        <option value="order">Auftrag</option>
                    </select>
                    </label>
                </div>
                <div class="pl-[100px]">
                    <input class="bg-[#272d30] text-white rounded-[10px] h-[100px] w-[450px] border-none pl-3 pt-[0]" type="text" name="message" placeholder="Message">
                </div>
            </div>
            <div class="">
                <div class="">
                    <span class="text-white">We are happy to help</span><br><span class="text-[#01a7ee]">strengthen your business</span><span class="text-white">!</span>
                </div>
                <div class="">
                    <span class="text-[#01a7ee] font-bold text-4xl">Get in touch </span><span class="text-white font-bold text-4xl">with us.</span>
                </div>
            </div>
        </div>
    </div>
</template>