<template>
<div class="wrapper">
	<div class="slider">
		<div class="slide-track">
			<div class="slide">
				<img src="img/Spiderman.png" />
			</div>
			
			<div class="slide">
				<img src="img/Spiderman.png" />
			</div>
			<div class="slide">
				<img src="img/Black-Adam.png" />
			</div>
			<div class="slide">
				<img src="img/Iron-Man.png" />
			</div>
			<div class="slide">
				<img src="img/SuperMan.png" />
			</div>
			<div class="slide">
				<img src="img/Captain-America.png" />
			</div>
			<div class="slide">
				<img src="img/Black-Panther.png" />
			</div>
			<div class="slide">
				<img src="img/Aquaman.png" />
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
				<div class="h-[175px] w-[450px] flex items-center">
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
	height: 95vh;
}

.slider {
	height: 200px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 85%;
	display: flex;
}

.slider .slide-track {
	-webkit-animation: scroll 30s linear infinite;
	animation: scroll 30s linear infinite;
	display: flex;
	width: calc(250px * 14);
}

.slider .slide {
	height: 100px;
	
}

.slider .slide img {
    width: 80%;
	height: 150px;
	border-radius: 10px;
	border: 2px solid #bbbbbb;
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