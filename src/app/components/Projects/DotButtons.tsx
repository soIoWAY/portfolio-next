interface IDotButtons {
	selectedIndex: number
	scrollTo: (index: number) => void
}

const DotButtons = ({ selectedIndex, scrollTo }: IDotButtons) => {
	return (
		<div className='flex justify-center space-x-4 mt-4'>
			{[0, 1].map(index => (
				<button
					key={index}
					aria-label='dot button'
					className={`w-3 h-3 rounded-full ${
						selectedIndex === index ? 'bg-rose-600' : 'bg-gray-700'
					}`}
					onClick={() => scrollTo(index)}
				/>
			))}
		</div>
	)
}

export default DotButtons
