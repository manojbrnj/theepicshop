import { type Config } from 'tailwindcss'
import easings from 'open-props/src/easing'
export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}','./index.html'],
	// safelist:[
	// 	{
	// 		pattern:/cols-start-(1|2|3|4|5)/,
			
	// 	},
	// 	{
	// 		pattern:/row-start-(1|2|3|4|5|6)/,
	// 	}
	// ],

	theme: {
		extend: { 
			
			screens: {
				'sm': '520px',
				// => @media (min-width: 640px) { ... }
	
				'lg': '976px',
				// => @media (min-width: 1024px) { ... }
			
			},colors:{
				highlight:'#6202FF'
			},
			fontFamily:{
				poppins:['Poppins','sans-serif']
			},
			fontSize:{
				'4.5xl':['2.625rem','1.15'],
				'5.5xl':['3.375rem','1'],
		
			},
			keyframes:{
	
				'slide-top':{
					from:{
					 opacity:'0',
					 transform: 'translateY(20px)'
					},
					to:{
					 opacity:'1',
					 transform:'translateY(0px)'
					}
				 },
				 'slide-left':{
					from:{
					 opacity:'0',
					 transform: 'translateX(20px)'
					},
					to:{
					 opacity:'1',
					 transform:'translateX(0px)'
					}
				 },
				 'rotate':{
				from:{
					transform:'rotateZ(36deg) scale(0%)',
					
				},
				to:{
					transform:'rotateZ(0deg) scale(100%)'
				}
			}
			},

			
				animation:{
					'slide-top':' 0.3s slide-top  ease-out backwards'	,
					'slide-left':'0.3s slide-left  ease-out backwards'	,
					'rotate' :` 0.4s  rotate  ${easings['--ease-spring-5']} backwards`						
				},
    

		},
	},
	plugins: [],
} satisfies Config
