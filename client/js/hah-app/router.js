import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './Landing'
import VerificationPortal from '../verification-portal/index'

const HahRouter = () => {
	return (
		<Router>
			<div>
				<Route exact path='/' component={Landing} />
				<Route exact path='/verification' component={VerificationPortal} />
			</div>
		</Router>
	)
}

export default HahRouter
