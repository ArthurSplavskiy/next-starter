// import gsap, {Power3} from 'gsap';

// export const mouseMoveHandler = (e: any) => {
// 	gsap.to('.click-cursor', {
// 		css: {
// 			left: e.clientX - 30,
// 			top: e.clientY - 30
// 		}
// 	});
// };

// export const mouseEnterHandler = () => {
// 	gsap.to('.click-cursor', {
// 		autoAlpha: 1,
// 		scale: 1,
// 		duration: 0.4,
// 		ease: Power3.easeOut
// 	});
// };

// export const mouseLeaveHandler = () => {
// 	gsap.to('.click-cursor', {
// 		autoAlpha: 0,
// 		scale: 0,
// 		duration: 0.4,
// 		ease: Power3.easeIn
// 	});
// };

// export const offCursorElements = (elementID: string) => {
// 	const cursor = document.querySelector('.click-cursor');
// 	const elements = document.querySelectorAll(elementID);

// 	const handleHover = () => {
// 		cursor?.classList.add('hide');
// 	};

// 	const handleUnHover = () => {
// 		cursor?.classList.remove('hide');
// 	};

// 	if (elements) {
// 		elements.forEach(elem => {
// 			elem.removeEventListener('mouseenter', handleHover);
// 			elem.removeEventListener('mouseleave', handleUnHover);
// 			elem.addEventListener('mouseenter', handleHover);
// 			elem.addEventListener('mouseleave', handleUnHover);
// 		});
// 	}
// };
