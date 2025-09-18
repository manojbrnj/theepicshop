import { EpicStackLogo } from './logos/epic-stack'
import { logos } from './logos/logos'
import clsx from 'clsx'
export default function App() {
	const colclasses: Record<(typeof logos)[number]['col'], string> = {
		1: 'col-start-1',
		2: 'col-start-2',
		3: 'col-start-3',
		4: 'col-start-4',
		5: 'col-start-5',
	}
	const rowclasses: Record<(typeof logos)[number]['row'], string> = {
		1: 'row-start-1',
		2: 'row-start-2',
		3: 'row-start-3',
		4: 'row-start-4',
		5: 'row-start-5',
		6: 'row-start-6',
	}
	return (
		<div className="grid min-h-screen place-items-center px-6 py-16">
			{/* layout container */}
			<div className="grid place-items-center gap-12 sm:gap-16 xl:gap-x-24 xl:gap-y-4 xl:grid-cols-[auto_1fr]  ">
				<div className="xl:item-left flex max-w-md flex-col items-center text-center xl:grid xl:text-left xl:grid-rows-subgrid xl:row-span-2 xl:row-start-3 xl:col-start-2  xl:grid-cols-[auto_1fr] xl:gap-4 xl:max-w-xl " >
					<EpicStackLogo
						className={clsx(
							'size-20',
							'animate-slide-top xl:animate-slide-left [animation-delay:0.9s] xl:[animation-delay:1.8s]',
						)}
					></EpicStackLogo>

					<h1 className="sm:text-4.5xl lg:text-5.5xl sm:animate-slide-top xl:animate-slide-left mt-6 text-2xl font-medium [animation-delay:900ms] sm:[animation-delay:1.2s] md:text-5xl xl:[animation-delay:2.3s] xl:mt-0">
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p className="sm:animate-slide-top mt-4 text-slate-600 [animation-delay:2.5s] sm:text-lg sm:[animation-delay:2s] md:mt-6 md:text-xl lg:text-xl xl:col-span-2 xl:mt-0">
						Check the{' '}
						<a
							href="#"
							className="focus:ring-highlight font-bold underline underline-offset-1 hover:no-underline focus:outline-none focus:ring-2"
						>
							Getting Started{' '}
						</a>{' '}
						guide file for how to get your project off the ground!
					</p>
				</div>

				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-subgrid xl:row-span-6 ">
					{logos.map((logo,index) => {
						return (
							<li
								key={logo.href}
								style={{'--loop-index':index} as React.CSSProperties}
								className={clsx(
									`${rowclasses[logo.row]} ${colclasses[logo.col]} `,
									// animation
								`animate-rotate`,
								'[animation-delay:calc(0.1s*var(--loop-index))]',
								)}
							>
								<a
									href="#"
									className="bg-highlight/[7%] hover:bg-highlight/[10%] focus:ring-highlight animate-slide-top grid size-20 place-items-center rounded-2xl p-4 transition hover:-rotate-6 hover:shadow focus:outline-none focus:ring focus:ring-offset-2 sm:size-24"
								>
									<img className="w-16" src={logo.src}></img>
								</a>
								
							</li>
							
						)
					})}
				</ul>

				{/* logo list */}
			</div>
		</div>
	)
}
