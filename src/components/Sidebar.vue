<template>
<div class="wrapper">
	<div class="slider">
		<div class="slide-track">
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+80</span><br>
					<span class="text-white">Websites</span>
				</div>
			</div>
			<div class="slide">
				<div class="h-[175px] w-[450px] flex items-center">
					<span class="text-2xl">-- We've Made Already +80 Websites --</span>
				</div>
			</div>
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+60</span><br>
					<span class="text-white">5 Stars Ratings</span>
				</div>
			</div>
			<div class="slide">
				<div class="h-[175px] w-[300px] flex items-center">
					<span class="text-2xl">-- 5 Stars Ratings, Easy! --</span>
				</div>
			</div>
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+580</span><br>
					<span class="text-white">Hours Of Work</span>
				</div>
			</div>			
			<div class="slide">
				<div class="h-[175px] w-[475px] flex items-center">
					<span class="text-2xl">-- We Do Our Best For Happy Customers --</span>
				</div>
			</div>
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+80</span><br>
					<span class="text-white">Websites</span>
				</div>
			</div>
			<div class="slide">
				<div class="h-[175px] w-[450px] flex items-center">
					<span class="text-2xl">-- We've Made Already +80 Websites --</span>
				</div>
			</div>
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+60</span><br>
					<span class="text-white">5 Stars Ratings</span>
				</div>
			</div>
			<div class="slide">
				<div class="h-[175px] w-[300px] flex items-center">
					<span class="text-2xl">-- 5 Stars Ratings, Easy! --</span>
				</div>
			</div>
			<div class="slide">
				<div class="bg-[#272d30] h-[150px] w-[150px] flex justify-center items-center flex-col rounded-[15px]">
					<span class="text-[#01a7ee] text-3xl font-bold">+580</span><br>
					<span class="text-white">Hours Of Work</span>
				</div>
			</div>			
			<div class="slide">
				<div class="h-[175px] w-[475px] flex items-center">
					<span class="text-2xl">-- We Do Our Best For Happy Customers --</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<style>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
}

.slider {
	height: 200px;
	padding-top: 25px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
	display: flex;
	background-color: #0f0f0f;
	color: white;
}

.slider .slide-track {
	-webkit-animation: scroll 30s linear infinite;
	animation: scroll 30s linear infinite;
	display: flex;
	width: calc(250px * 6);
}

.slider .slide {
	height: 100px;
	padding-left: 25px;
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