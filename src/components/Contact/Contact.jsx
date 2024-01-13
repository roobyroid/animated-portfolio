import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';
import { useState } from 'react';

const variants = {
	initial: { y: 500, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const ref = useRef();
	const formRef = useRef();

	const isInView = useInView(ref, { margin: '-100px' });

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8rkf2ip',
				'template_w1f068t',
				formRef.current,
				'rWedY6yf_6XidMRLR'
			)
			.then(
				(result) => {
					setSuccess(true);
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<motion.div
			ref={ref}
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h2 variants={variants}>Let&apos;s work together</motion.h2>
				<motion.div className="item" variants={variants}>
					<h3>Mail</h3>
					<span>hello@react.dev</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h3>Address</h3>
					<span>Hello street New York</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h3>Phone</h3>
					<span>1-234-5678</span>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				<motion.div
					className="phoneSvg"
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 3, duration: 1 }}
				>
					<svg
						width="450px"
						height="450px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
					>
						<motion.path
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d="M223,58c-22.2-30.1-57.7-48-95-48C62.9,10,10,62.9,10,128c0,65.1,52.9,118,118,118c30.3,0,59.1-11.5,81.1-32.3c23.8-22.5,36.9-52.9,36.9-85.7C246,102.6,238,78.4,223,58z M200.4,204.5c-19.7,18.6-45.4,28.8-72.4,28.8c-5.5,0-11-0.6-16.3-1.4c-9-3.6-17.4-9.8-22.7-17.1c-3.3-4.6-6.6-11.5-4.9-19.2c1.4,0.9,2.7,1.7,3.9,2.5c0,0,0,0,0.1,0c1.3,0.9,2.9,1.4,4.6,1.4c2.9,0,5.5-1.5,7-3.7h0l20.5-32.7c1-2.1,0.5-4.6-1.4-6.4l-8.1-6.8c-1.8-1.6-2.4-3.9-1.8-5.9c0,0,2.9-9.3,14.5-23c11.7-13.8,20.4-18.1,20.4-18.1c1.9-1,4.2-0.8,6.1,0.7l8.1,6.8c2,1.6,4.7,1.7,6.6,0.4l28.8-25.5c0,0,0-0.1,0-0.1c1.7-1.5,2.8-3.8,2.8-6.3c0-2.2-0.9-4.1-2.3-5.6c-5.4-6-15.8-17.5-16.6-18.1c-1.7-1.4-3.9-2-5.9-1.7c-1.1,0.4-2.1,0.6-3.2,1c-2.2,0.8-4.5,1.8-6.8,2.7c-0.6,0.3-1.2,0.5-1.8,0.7c-19.4,8.8-39.6,24.4-57.2,45.2c-17.6,20.8-29.7,43.3-35.2,63.9c-0.2,0.7-0.3,1.3-0.4,2c-0.6,2.4-1.2,4.8-1.6,7.1c-0.2,1.1-0.3,2.2-0.4,3.3c0,2,0.9,4.1,2.7,5.6c0.4,0.4,4.8,3.2,9.8,6.5l-0.7-0.2c-3.1,9.4-1.2,19.4,5.5,28.8c1.2,1.7,2.6,3.4,4.1,4.9c-37.4-16.2-63.7-53.4-63.7-96.7C22.6,69.9,69.9,22.6,128,22.6c33.3,0,65,16,84.8,42.8c13.4,18.2,20.5,39.9,20.5,62.5C233.4,157.2,221.7,184.4,200.4,204.5z"
						></motion.path>
					</svg>
				</motion.div>
				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }}
				>
					<input type="text" placeholder="Name" name="name" required />
					<input type="email" placeholder="Email" name="email" required />
					<textarea name="message" placeholder="Message" rows="8"></textarea>
					<button>Submit</button>
					{error && 'Error'}
					{success && 'Success'}
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
