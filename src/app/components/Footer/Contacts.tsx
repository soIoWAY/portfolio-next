import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Contacts = () => {
	return (
		<div>
			<ul className='flex flex-col gap-2'>
				<li>
					<Link href='/'>
						<div className='flex items-center gap-3'>
							<FaPhoneAlt className='fill-rose-700 text-xl' />
							<p>0688867089</p>
						</div>
					</Link>
				</li>
				<li>
					<Link href=''>
						<div className='flex items-center gap-3'>
							<IoMail className='fill-rose-700 text-xl' />
							<p>vitalikmur38@gmail.com</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Contacts
