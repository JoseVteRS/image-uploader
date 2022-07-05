import React from 'react';
import GithubIcon from '../icons/github-icon';
import LinkedinIcon from '../icons/linkedin-icon';

const Footer = () => {
	return (
		<footer className='bg-slate-800 p-3  sticky bottom-0 w-full text-xs'>
			<div className='text-slate-200 container mx-auto text-center'>
				<p className='mb-2'>
					This project has been created for improve my knowlegments. Its a
					challenges from{' '}
					<a
						href='https://devchallenges.io/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-orange-400 hover:underline'
					>
						devchallenges.io
					</a>{' '}
				</p>
				<p className='mb-2'>
					You can follow me on Github and star this project, also you can visit
					my profile on Linkedin and be in touch. Both links are below
				</p>

				<div className='my-5 flex items-center justify-center gap-5'>
					<a
						href='https://github.com/JoseVteRS/image-uploader'
						target='_blank'
						rel='noopener noreferrer'
						className='bg-white p-2 rounded-full hover:shadow-md'
					>
						<GithubIcon className='w-6 h-6 fill-slate-800' />
					</a>
					<a
						href='http://linkedin.es'
						target='_blank'
						rel='noopener noreferrer'
						className='bg-white p-2 rounded-full hover:shadow-md'
					>
						<LinkedinIcon className='w-6 h-6 fill-slate-800' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
