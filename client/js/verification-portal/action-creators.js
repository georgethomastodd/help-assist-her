import _ from 'lodash'

import { store } from '../hah-app/index'
import { GET_RESOURCE_TO_VERIFY } from './action-types'

async function getOneResource() {
	const response = await fetch('http://localhost:4000/api/pregnancy-centers/verify', {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
		},
	})
	return await response.json()
}

function getResource(resource) {
	return {
		type: GET_RESOURCE_TO_VERIFY,
		resource,
	}
}

export const getResourceToVerify = () => {
	return function(dispatch) {
		return getOneResource()
			.then(
				result => dispatch(getResource(result))
			)
	}
}

export async function updateResource(updatedResource) {
	const services = _.keys(updatedResource.services)
	const transformedResource = {
		...updatedResource,
		primaryContactUserId: store.getState().resource.primaryContactUserId,
		services,
		hours: {
			...updatedResource.hours,
		},
	}
	console.log('TRANSFORMED RESOURCE', transformedResource)

	fetch('http://localhost:4000/api/pregnancy-centers', {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(transformedResource),
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (result) {
			alert(JSON.stringify(result))
		})
		.catch(function (error) {
			console.log('Request failed', error)
		})
}