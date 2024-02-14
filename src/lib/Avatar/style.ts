import { cva } from 'class-variance-authority';

const AvatarWrapStyle = cva(['inline-flex rounded-full relative overflow-hidden bg-gray-100'], {
	variants: {
		size: {
			xl: ['w-36 h-36'],
			lg: ['w-20 h-20'],
			md: ['w-12 h-12'],
			regular: ['w-8 h-8'],
			sm: ['w-6 h-6'],
		},
	},
});

export { AvatarWrapStyle };
