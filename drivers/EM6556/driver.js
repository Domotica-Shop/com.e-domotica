'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

module.exports = new ZwaveDriver(path.basename(__dirname), {
	capabilities: {
		onoff: {
			command_class: 'COMMAND_CLASS_SWITCH_BINARY',
			command_get: 'SWITCH_BINARY_GET',
			command_set: 'SWITCH_BINARY_SET',
			command_set_parser(value) {
				return {
					'Switch Value': value,
				};
			},
			command_report: 'SWITCH_BINARY_REPORT',
			command_report_parser(report) {
				return report.Value === 'on/enable';
			},
		},
	},
});
