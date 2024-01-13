import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import './portfolio.scss';

const items = [
	{
		id: 1,
		title: 'React Commerce',
		img: 'https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148434092.jpg?w=1380&t=st=1705066522~exp=1705067122~hmac=792e59c68eaac190a19a38519e7eeefa4bc896a78883ffd968c0ee685f87e534',
		descr: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa
		quibusdam numquam placeat, ut quae deleniti, odio atque eum, aut
		asperiores distinctio nesciunt inventore iusto eveniet tempora id tenetur
		magni.`,
	},
	{
		id: 2,
		title: 'Next.js Blog',
		img: 'https://img.freepik.com/free-photo/teamwork-making-an-online-blog_53876-94868.jpg?w=1380&t=st=1705066561~exp=1705067161~hmac=d22dd3533a243391a4dcf29bd6a691e9e1a2270bbca8bb81392349b29dbb2539',
		descr: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa
		quibusdam numquam placeat, ut quae deleniti, odio atque eum, aut
		asperiores distinctio nesciunt inventore iusto eveniet tempora id tenetur
		magni.`,
	},
	{
		id: 3,
		title: 'Vanilla JS App',
		img: 'https://img.freepik.com/free-vector/car-tracker-app-isometric-landing-page-gps-service_107791-1520.jpg?w=1480&t=st=1705066807~exp=1705067407~hmac=b9d0369e02ebeeb0a685772beec40d2bfbed180b504be0350a26171e657a4f88',
		descr: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa
		quibusdam numquam placeat, ut quae deleniti, odio atque eum, aut
		asperiores distinctio nesciunt inventore iusto eveniet tempora id tenetur
		magni.`,
	},
	{
		id: 4,
		title: 'Music App',
		img: 'https://img.freepik.com/free-vector/playlist-concept-illustration_114360-6596.jpg?w=826&t=st=1705066443~exp=1705067043~hmac=b6b6bc9904f57e56fd100363cd7cc6f39dd2c30c6f9fd6f536986200cd85b9d2',
		descr: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa
		quibusdam numquam placeat, ut quae deleniti, odio atque eum, aut
		asperiores distinctio nesciunt inventore iusto eveniet tempora id tenetur
		magni.`,
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imgContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div style={{ y }} className="textContainer">
						<h3>{item.title}</h3>
						<p>{item.descr}</p>
						<button>See Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h2>Featured Works</h2>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
