"use strict"

import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, button} from 'react=bootstrap';

class BooksForm extends React.Component {
	render() {
		return(
			<Well>
				<Panel>
					<FormGroup controlId="title">
						<ControlLabel>title</ControlLabel>
						<FormControl 
							type="text
							placeholder=""Enter title"><FormControl>
							ref="title" />

					</FormCGroup>
				</Panel>
			</Well>
		)
	}
}