/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as assert from 'assert';
import { toLocalISOString } from 'vs/base/common/date';

suite('Date.toLocalISOString', () => {
	test('returns a date formatted according to ISO', () => {
		const date = new Date(2018, 4, 15, 12, 50, 51, 356);
		const dateString = toLocalISOString(date);

		assert.equal(dateString, '2018-05-15T12:50:51.356Z');
	});
});
