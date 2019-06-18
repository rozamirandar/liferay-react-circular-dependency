import React from 'react';
import ReactDOM from 'react-dom';

import Group from './Group';

export default function AppComponent(props) {

	const items = [
		{
			name: 'Row 1'
		},
		{
			name: 'Row 2',
			childItems: [
				{
					name: "Item 2.1"
				},
				{
					name: "Item 2.2",
					childItems: [
						{
							name: "Item 2.2.1"
						},
						{
							name: "Item 2.2.2"
						}
					]
				},
				{
					name: "Item 2.1"
				}
			]
		},
		{
			name: 'Row 3'
		}
	];

	return (
		<div>
			<div>
				<span className="tag">Portlet Namespace:</span>
				<span className="value">{props.portletNamespace}</span>
			</div>
			<div>
				<span className="tag">Context Path:</span>
				<span className="value">{props.contextPath}</span>
			</div>
			<div>
				<span className="tag">Portlet Element Id:</span>
				<span className="value">{props.portletElementId}</span>
			</div>

			<Group items={items} />

		</div>
	);
}