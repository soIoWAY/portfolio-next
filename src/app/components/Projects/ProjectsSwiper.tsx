import { slides } from '@/app/content/content'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import DotButtons from './DotButtons'
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
				{slides.map((slide, index) => (
					<div className='embla__slide flex flex-col items-center' key={index}>
						<div className='w-full flex justify-center'>
							<Image
								src={slide.image}
								width={500}
								height={500}
								alt={slide.description}
							/>
						</div>
						<p className='text-center w-[90%] sm:w-[80%] text-sm mt-2'>
							{slide.text}
						</p>
					</div>
				))}
			</div>
			<DotButtons selectedIndex={selectedIndex} scrollTo={scrollTo} />
		</div>
	)
}
