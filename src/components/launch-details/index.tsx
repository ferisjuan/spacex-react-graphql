import { ReactElement } from 'react'
export interface LaunchDetailsProps {
	id: string
}

function LaunchDetails({ id }: LaunchDetailsProps): ReactElement {
	return <h1>{id}</h1>
}

export { LaunchDetails }
