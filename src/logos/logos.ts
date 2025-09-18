import docker from './docker.svg'
import eslint from './eslint.svg'
import fakerJS from './faker.svg'
import fly from './fly.svg'
import github from './github.svg'
import msw from './msw.svg'
import playwright from './playwright.svg'
import prettier from './prettier.svg'
import prisma from './prisma.svg'
import radixUI from './radix.svg'
import reactEmail from './react-email.svg'
import remix from './remix.svg'
import resend from './resend.svg'
import sentry from './sentry.svg'
import shadcnUI from './shadcn-ui.svg'
import sqlite from './sqlite.svg'
import tailwind from './tailwind.svg'
import testingLibrary from './testing-library.png'
import typescript from './typescript.svg'
import vitest from './vitest.svg'
import zod from './zod.svg'

export { EpicStackLogo } from './epic-stack'

/*
	🧝‍♀️ I've prepared this list of Epic Stack logos, 
	so you can display them on the page design.
*/
export const logos = [
	{
		src: remix,
		alt: 'Remix',
		href: 'https://remix.run',
		col:1,
		row:1,

	},
	{
		src: fly,
		alt: 'Fly.io',
		href: 'https://fly.io',
		col:1,
		row:2,
	},
	{
		src: sqlite,
		alt: 'SQLite',
		href: 'https://sqlite.org',
		col:1,
		row:3,
	},
	{
		src: prisma,
		alt: 'Prisma',
		href: 'https://prisma.io',
		col:2,
		row:2,
	},
	{
		src: zod,
		alt: 'Zod',
		href: 'https://zod.dev/',
		col:2,
		row:3,
	},
	{
		src: github,
		alt: 'GitHub',
		href: 'https://github.com',
		col:2,
		row:4,
	},
	{
		src: resend,
		alt: 'Resend',
		href: 'https://resend.com',
		col:2,
		row:5,
	},
	{
		src: reactEmail,
		alt: 'React Email',
		href: 'https://react.email',
		col:2,
		row:6,
	},
	{
		src: tailwind,
		alt: 'Tailwind CSS',
		href: 'https://tailwindcss.com',
		col:3,
		row:3,
	},
	{
		src: radixUI,
		alt: 'Radix UI',
		href: 'https://www.radix-ui.com/',
		col:3,
		row:4,
	},
	{
		src: shadcnUI,
		alt: 'shadcn/ui',
		href: 'https://ui.shadcn.com/',
		col:3,
		row:5,
	},
	{
		src: playwright,
		alt: 'Playwright',
		href: 'https://playwright.dev/',
		col:3,
		row:6
	},
	{
		src: msw,
		alt: 'MSW',
		href: 'https://mswjs.io',
		col:4,
		row:6,
	},
	{
		src: fakerJS,
		alt: 'Faker.js',
		href: 'https://fakerjs.dev/',
		col:4,
		row:4,
	},
	{
		src: vitest,
		alt: 'Vitest',
		href: 'https://vitest.dev',
		col:4,
		row:5,
	},
	{
		src: testingLibrary,
		alt: 'Testing Library',
		href: 'https://testing-library.com',
		col:4,
		row:3,
	},
	{
		src: docker,
		alt: 'Docker',
		href: 'https://www.docker.com',
		col:5,
		row:1,
	},
	{
		src: typescript,
		alt: 'TypeScript',
		href: 'https://typescriptlang.org',
		col:5,
		row:2,
	},
	{
		src: prettier,
		alt: 'Prettier',
		href: 'https://prettier.io',
		col:5,
		row:3,
	},
	{
		src: eslint,
		alt: 'ESLint',
		href: 'https://eslint.org',
		col:5,
		row:4,
	},
	{
		src: sentry,
		alt: 'Sentry',
		href: 'https://sentry.io',
		col:5,
		row:5,
	},
] as const 
