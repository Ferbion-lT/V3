<template class="scroll-smooth">
<div class="flex justify-center">
        <div class="flex text-white bg-[#0f0f0f] w-full relative overflow-hidden pt-[25px] m-auto h-[200px]">
            <div class="slide-animation flex">
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+80</span><br>
                        <span class="text-white">Webseiten</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[450px] flex items-center">
                        <span class="text-2xl">-- Bereits über +80 erstellte Webseiten --</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+5</span><br>
                        <span class="text-white">5 Sterne</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[525px] flex items-center">
                        <span class="text-2xl">-- 5 Sterne: Ihr Vertrauen, unsere Bestätigung --</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+580</span><br>
                        <span class="text-white">Stunden Arbeit</span>
                    </div>
                </div>			
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[550px] flex items-center">
                        <span class="text-2xl">-- Wir geben unser Bestes für glückliche Kunden --</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+80</span><br>
                        <span class="text-white">Webseiten</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[450px] flex items-center">
                        <span class="text-2xl">-- Bereits über +80 erstellte Webseiten --</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+5</span><br>
                        <span class="text-white">5 Sterne</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[525px] flex items-center">
                        <span class="text-2xl">-- 5 Sterne: Ihr Vertrauen, unsere Bestätigung --</span>
                    </div>
                </div>
                <div class="pl-[25px]">
                    <div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px] lg:hover:scale-110 duration-300 transition">
                        <span class="text-[#01a7ee] text-3xl font-bold">+580</span><br>
                        <span class="text-white">Stunden arbeit</span>
                    </div>
                </div>			
                <div class="pl-[25px]">
                    <div class="h-[175px] w-[550px] flex items-center">
                        <span class="text-2xl">-- Wir geben unser Bestes für glückliche Kunden --</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

.slide-animation {
	-webkit-animation: scroll 30s linear infinite;
	animation: scroll 30s linear infinite;
}

@-webkit-keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}
</style>

<script>
</script>
