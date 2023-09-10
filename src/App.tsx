function App () {
    return (
      <div>
				<div className="h-[100vh] py-[120px] px-[100px] flex items-start flex-col">
					<h1 className="font-light text-[2.5rem] flex items-center">
						Hello!
						<span style={{backgroundImage: 'url("src/assets/wave.png")'}} className="cursor-pointer h-[40px] w-[40px] bg-no-repeat bg-contain inline-block text-center ml-6" />
					</h1>
					<div>
					<h2 className="font-light text-[1.75rem] mt-10">
						We`re 
						<span className="font-bold"> Ferbion</span>
						, a software company with the goal to <br/> unlock innovation through code.
					</h2>
					<h3 className="font-normal text-[1.25rem] flex items-center mt-6">
						<span>Get in touch with us</span>
						<span style={{backgroundImage: 'url("src/assets/pointright.png")'}} className="cursor-poiner h-[40px] w-[40px] bg-no-repeat bg-contain inline-block text-center ml-3" />
						<span className="ml-4">
							<a className="test border-b-2 border-[#007bff]" href="mailto:" target="_blank">
								ferbionIT@gmail.com
							</a>
						</span>
					</h3>
				</div>
				</div>
			</div>
    )
}

export default App