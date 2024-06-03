import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
export function ProjectSwiper() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
		Autoplay({ delay: 5000 }),
	])
	const [selectedIndex, setSelectedIndex] = useState(0)
	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) emblaApi.scrollTo(index)
		},
		[emblaApi]
	)

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		emblaApi.on('select', onSelect)
		onSelect()
	}, [emblaApi, onSelect])
	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>
				<div className='embla__slide flex flex-col items-center'>
					<div className='w-full flex justify-center'>
						<Image
							src='/project_1.png'
							width={500}
							height={500}
							alt='project1'
						/>
					</div>
					<p className='text-center w-[80%] text-sm mt-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						voluptatem, tenetur, optio voluptates deserunt dolores totam
						reprehenderit voluptate hic, quis omnis earum incidunt quisquam
						expedita sint quia autem eligendi aut.
					</p>
				</div>
				<div className='embla__slide flex flex-col items-center'>
					<div className='w-full flex justify-center'>
						<Image
							src='/project_2.png'
							width={500}
							height={500}
							alt='project2'
						/>
					</div>
					<p className='text-center w-[80%] text-sm mt-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						voluptatem, tenetur, optio voluptates deserunt dolores totam
						reprehenderit voluptate hic, quis omnis earum incidunt quisquam
						expedita sint quia autem eligendi aut.
					</p>
				</div>
				<div className='embla__slide'>Slide 3</div>
			</div>
			<div className='flex justify-center space-x-4 mt-4'>
				<button
					className={`w-3 h-3 rounded-full ${
						selectedIndex === 0 ? 'bg-rose-600' : 'bg-gray-700'
					}`}
					onClick={() => scrollTo(0)}
				/>
				<button
					className={`w-3 h-3 rounded-full ${
						selectedIndex === 1 ? 'bg-rose-600' : 'bg-gray-700'
					}`}
					onClick={() => scrollTo(1)}
				/>
				<button
					className={`w-3 h-3 rounded-full ${
						selectedIndex === 2 ? 'bg-rose-600' : 'bg-gray-700'
					}`}
					onClick={() => scrollTo(2)}
				/>
			</div>
		</div>
	)
}
