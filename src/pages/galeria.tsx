import React from 'react'

const Galeria = () => {
	return (
		<div className='w-full'>
      
			<div className="grid flex-grow w-full gap-3 p-6 rounded-tl-none shadow-xl rounded-xl bg-base-100">
				<div className="flex items-center space-x-2">
					<div className="dropdown"><div tabindex="0">
						<div className="avatar online">
							<div className="w-16 h-16 p-px bg-opacity-10 mask mask-hexagon bg-base-content">
								<img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" className="mask mask-hexagon" />
							</div>
						</div>
					</div>
					<div tabindex="0" className="py-2 dropdown-content">
						<div className="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
							<div className="card-body"><h2 className="font-extrabold capitalize card-title">avatar component</h2><p className="text-sm text-neutral-content text-opacity-80">Use avatar component with any size</p><div className="flex justify-end mt-4"><a target="blank" href="https://daisyui.com/components/avatar" className="btn btn-primary btn-sm xl:btn-md"> See component </a></div></div></div></div></div><div><div className="text-lg font-extrabold">Beatrice Thurman</div><div className="text-sm text-base-content text-opacity-60">220 Followers</div></div></div><div className="dropdown"><div tabindex="0"><div className="m-0 divider text-base-content text-opacity-40">Reports</div></div><div tabindex="0" className="py-2 dropdown-content"><div className="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box"><div className="card-body"><h2 className="font-extrabold capitalize card-title">divider component</h2><p className="text-sm text-neutral-content text-opacity-80"> User divider component to visually separate items </p><div className="flex justify-end mt-4"><a target="blank" href="https://daisyui.com/components/divider" className="btn btn-primary btn-sm xl:btn-md"> See component </a></div></div></div></div></div><div className="text-lg font-extrabold">Audience Report</div><div className="grid gap-3"><div className="dropdown dropdown-top"><div tabindex="0"><div className="flex items-center p-1"><span className="w-48 text-xs text-base-content text-opacity-60">Search Engines</span><progress max="100" className="progress progress-success" value="50"></progress></div><div className="flex items-center p-1"><span className="w-48 text-xs text-base-content text-opacity-60">Direct</span><progress max="100" className="progress progress-primary" value="30"></progress></div><div className="flex items-center p-1"><span className="w-48 text-xs text-base-content text-opacity-60">Social Media</span><progress max="100" className="progress progress-secondary" value="70"></progress></div><div className="flex items-center p-1"><span className="w-48 text-xs text-base-content text-opacity-60">Emails</span><progress max="100" className="progress progress-accent" value="90"></progress></div><div className="flex items-center p-1"><span className="w-48 text-xs text-base-content text-opacity-60">Ad campaigns</span><progress max="100" className="progress progress-warning" value="65"></progress></div></div><div tabindex="0" className="py-2 dropdown-content"><div className="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box"><div className="card-body"><h2 className="font-extrabold capitalize card-title">progress component</h2><p className="text-sm text-neutral-content text-opacity-80"> Show progressbar, loadings or simple bar charts using progress component </p><div className="flex justify-end mt-4"><a target="blank" href="https://daisyui.com/components/progress" className="btn btn-primary btn-sm xl:btn-md"> See component </a></div></div></div></div></div></div></div>
			
		</div>

	)
}

export default Galeria