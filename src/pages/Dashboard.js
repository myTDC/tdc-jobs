// import React from 'react';
import React, { memo } from 'react'
import PropTypes from 'prop-types'

import '../styles/Dash.css'
import ProgressRing from '../components/dash/ProgressRing';
import { useWindowWidth } from '../shared/commonHooks';


const DashCard = memo(function DashCard({ title = 'Resume', styleClass = 'resume_grad', cta = '', ctaHandler = '', chart = '', dataPoints = '' }) {
	const isMobile = useWindowWidth()
	return (
		<div className={`dash_card_container ${styleClass}`}>
			<article className={`dash_card`}>
				<h2 className="dash_card_title">{title}</h2>
				<div className="dash_card_prog">
					<ProgressRing
						radius={isMobile ? 60 : 100}
						stroke={isMobile ? 8 : 12}
						progress={75}
					/>
				</div>
				<div className="dash_card_cta" onClick={(title) => ctaHandler(title)}>{cta}></div>
			</article>
		</div>
	)
})

DashCard.propTypes = {
	title: PropTypes.string,
}

// export default DashCard

const cardCtaHandler = (source = 'Dash card') => {
	console.log(source);
	alert(source + ' clicked');
}

const cardTemplate = [
	{ id: '1', title: 'Resume', styleClass: 'resume_grad', cta: 'update resume', ctaHandler: cardCtaHandler, chart: '', dataPoints: '' },
	{ id: '2', title: 'Projects', styleClass: 'projects_grad', cta: 'link projects', ctaHandler: cardCtaHandler, chart: '', dataPoints: '' },
	{ id: '3', title: 'Trainings', styleClass: 'trainings_grad', cta: 'complete training', ctaHandler: cardCtaHandler, chart: '', dataPoints: '' },
	{ id: '4', title: 'Leads', styleClass: 'leads_grad', cta: 'apply here', ctaHandler: '', chart: cardCtaHandler, dataPoints: '' },
]

const Dashboard = (props) => {
	return (
		<div className="dashboard_grid">
			{cardTemplate.map((dash_item) => (
				<DashCard key={dash_item.id} {...dash_item} />
			))}

			<section className="dash_insights_container industry">
				<div className="insights_header header_feedback">
					<div className="insights_title">Interview Feedback</div>
					<span>
						<button className="insights_header_btn btn_info">?</button>
						<button className="insights_header_btn btn_dismiss">x</button>
					</span>
				</div>
				<article className="dash_insights">
					In the last session, your interviwer recommended that you should focus more on talking about your team work experience than portraying a Jack-of-all-trades image.
					</article>
				<span>
					<button className="insights_footer_btn btn_discover">View All</button>
					<button className="insights_footer_btn btn_apply">More Details</button>
				</span>
			</section>

			<section className="dash_insights_container industry">
				<div className="insights_header header_data">
					<div className="insights_title">Industry Insights</div>
					<span>
						<button className="insights_header_btn btn_info">?</button>
						<button className="insights_header_btn btn_dismiss">x</button>
					</span>
				</div>
				<article className="dash_insights">
					People with similar skills and qualifications are currently earning INR 25,000-28,000 in jobs at these marketing firms for the role of analysts.
					</article>
				<span>
					<button className="insights_footer_btn btn_discover">More Info.</button>
					<button className="insights_footer_btn btn_apply">Apply Now</button>
				</span>
			</section>

		</div>
	);
};

Dashboard.propTypes = {
	user: PropTypes.object,
};
export default Dashboard;
