import UserRegisterForm from './user-forms/user-register-form';

const Navbar = () => {
  return (
		<>
			<div className='mb-12'>
				<ul className='flex gap-3 items-center'>
					<button className='bg-sky-500 p-2 rounded text-white font-bold hover:bg-sky-600 focus:shadow-lg focus:shadow-sky-400  focus:outline-none'>
						Register
					</button>
					<li>Sign in</li>
				</ul>
			</div>
  

			<UserRegisterForm />
  

 
		</>
	);
}

export default Navbar