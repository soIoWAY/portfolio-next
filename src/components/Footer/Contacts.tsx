import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Contacts = () => {
	return (
		<div>
			<ul className='flex flex-col gap-2'>
				<li>
					<a href='tel:+380688867089'>
						<div className='flex items-center gap-3'>
							<FaPhoneAlt className='fill-customRose-900 text-xl' />
							<p>0688867089</p>
						</div>
					</a>
				</li>
				<li>
					<a href='mailto:vitalikmur38@gmail.com'>
						<div className='flex items-center gap-3'>
							<IoMail className='fill-customRose-900 text-xl' />
							<p>vitalikmur38@gmail.com</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Contacts
