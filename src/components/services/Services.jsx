import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import './services.scss';

const variants = {
	initial: {
		x: -300,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-50px' });
	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			animate={isInView && 'animate'}
			ref={ref}
		>
			<motion.div className="textContainer" variants={variants}>
				<p>
					I focus on helping your brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="people.webp" alt="" />
					<p>
						<motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
					</p>
				</div>
				<div className="title">
					<p>
						<motion.b whileHover={{ color: 'orange' }}>For You</motion.b>{' '}
						Business
					</p>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div
					className="box"
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
						provident cumque veniam quis natus rerum nihil sit iure ab fuga nam
						beatae harum, laboriosam voluptatem illo animi reiciendis mollitia
						optio?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
						provident cumque veniam quis natus rerum nihil sit iure ab fuga nam
						beatae harum, laboriosam voluptatem illo animi reiciendis mollitia
						optio?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
						provident cumque veniam quis natus rerum nihil sit iure ab fuga nam
						beatae harum, laboriosam voluptatem illo animi reiciendis mollitia
						optio?
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
						provident cumque veniam quis natus rerum nihil sit iure ab fuga nam
						beatae harum, laboriosam voluptatem illo animi reiciendis mollitia
						optio?
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
