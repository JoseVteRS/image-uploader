const ImageIcon = props => {
	return (
		<>
			<svg {...props} viewBox='0 0 59 59'>
				<path fill='#ecf0f1' d='M1 4h55v42H1z' />
				<path fill='#545e73' d='M57 47H0V3h57v44zM2 45h53V5H2v40z' />
				<path fill='#545e73' d='M5 8h47v34H5z' />
				<path fill='#ecf0f1' d='M53 43H4V7h49v36zM6 41h45V9H6v32z' />
				<circle cx='15' cy='16.6' r='4.6' fill='#f3d55a' />
				<path fill='#11a085' d='m51 32-1-1-12-11-10 12 5 5 4 4h14z' />
				<path fill='#26b999' d='M6 41h31l-4-4-11-11L6 40z' />
				<path
					fill='#3d324c'
					d='m59 54-7-7 6-3-17-6 6 17 3-6 7 7a1 1 0 0 0 2 0v-2z'
				/>
			</svg>
		</>
	);
};

export default ImageIcon;
