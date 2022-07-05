import { useState } from 'react';
import Button from './ui/Button';
import UserRegisterForm from './user-forms/user-register-form';

const Navbar = () => {

	const [isVisible, setIsVisible] = useState(false)

	const handleIsVisible = () => { setIsVisible(!isVisible) }

  return (
		<>
			<nav className=' bg-slate-800 text-slate-100 p-3 sticky top-0 z-50'>
				<ul className='flex gap-3 items-center'>
					<Button onClick={handleIsVisible}>Register</Button>
					<li>Sign in</li>
				</ul>
			</nav>

			{isVisible && <UserRegisterForm />}
		</>
	);
}

export default Navbar