//
(function(){
	if ( ! ( 'BMI' in window ) ) {
		window['BMI'] = window['bmi'] = function(w, h, o)
		{
			try {
				var r = w/Math.pow(h, 2);
				o = o || false;

				if ( o ) {
					if ( r < 16) {
						r = 'Severe Thinness';
					} else if ( r <= 17 ) {
						r = 'Moderate Thinness';
					} else if ( r <= 18.5 ) {
						r = 'Mild Thinness';
					} else if ( r <= 25 ) {
						r = 'Normal';
					} else if ( r <= 30 ) {
						r = 'Overweight';
					} else if ( r <= 35 ) {
						r = 'Obese Class I';
					} else if ( r <= 40 ) {
						r = 'Obese Class II';
					} else {
						r = 'Obese Class III';
					}
				}
				return isNaN( r ) ? r : r.toFixed(2)*1;
			} catch ( err ) { return null; }
		};
	}

	if ( ! ( 'BFP' in window ) ) {
		window['BFP'] = window['bfp'] = function(w, h, g, a, o)
		{
			try {
				o = o || false;

				if ( typeof g  == 'string' ) {
					g = ( 'female' == g.toLowerCase() ) ? 1 : 0;
				}

				var bmi  = w/Math.pow(h, 2),
					f = ( 0 < g ) ? 5.4 : 16.2,
					r = (1.20 * bmi) + (0.23 * a) - f;

				if ( o ) {
					if ( g ) { // Female
						if ( a <= 40  ) {
							if ( r < 21 ) {
								r = 'Underfat';
							} else if ( r < 33 ) {
								r = 'Healthy';
							} else if ( r < 39 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						} else if ( a <= 60  ) {
							if ( r < 23 ) {
								r = 'Underfat';
							} else if ( r < 35 ) {
								r = 'Healthy';
							} else if ( r < 40 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						} else {
							if ( r < 24 ) {
								r = 'Underfat';
							} else if ( r < 36 ) {
								r = 'Healthy';
							} else if ( r < 42 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						}
					} else { // Male
						if ( a <= 40  ) {
							if ( r < 8 ) {
								r = 'Underfat';
							} else if ( r < 19 ) {
								r = 'Healthy';
							} else if ( r < 25 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						} else if ( a <= 60  ) {
							if ( r < 11 ) {
								r = 'Underfat';
							} else if ( r < 22 ) {
								r = 'Healthy';
							} else if ( r < 27 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						} else {
							if ( r < 13 ) {
								r = 'Underfat';
							} else if ( r < 25 ) {
								r = 'Healthy';
							} else if ( r < 30 ) {
								r = 'Overweight';
							} else {
								r = 'Obese';
							}
						}
					}
				}
				return isNaN( r ) ? r : r.toFixed(2)*1;
			} catch ( err ) { return null; }

		};
	}

	if ( ! ( 'BMR' in window ) ) {
		window['BMR'] = window['bmr'] = function(w, h, g, a, c)
		{
			try {
				if ( typeof g  == 'string' ) {
					g = ( 'female' == g.toLowerCase() ) ? 1 : 0;
				}

				c = ( new String(c)	).replace( /^\s*/, '' ).replace( /\s*$/, '' ).toLowerCase();

				switch( c ) {
					case 'sedentary':
						c = 1.2;
						break;
					case 'light':
						c = 1.375;
						break;
					case 'moderate':
						c = 1.465;
						break;
					case 'active':
						c = 1.55;
						break;
					case 'very':
						c = 1.725;
						break;
					case 'extra':
						c = 1.9;
						break;
					default:
						c = 1;
						break;
				}
				var r = ( 10 * w + 6.25 * h * 100 - 5 * a + (g ? -161 : 5) ) * c;
				return Math.round( r );
			} catch ( err ) { return null; }

		};
	}

	if ( ! ( 'WEIGHTGOAL' in window ) ) {
		window['WEIGHTGOAL'] = window['weightgoal'] = function(w, h, g, a, c, o)
		{
			// 1 pound (~0.45 kg) equates to approximately 3500
			try {
				var b = BMR(w, h, g, a, c), f = 0;
				if ( null != b ) {
					o = ( new String(o)	).replace(/\s+/g, ' ').replace( /^\s*/, '' ).replace( /\s*$/, '' ).toLowerCase();
					switch( o ) {
						case 'mild loss': // 0.25 kg/week
							f = 0.25 * 7700 * -1;
							break;
						case 'loss': // 0.5 kg/week
							f = 0.5 * 7700 * -1;
							break;
						case 'extreme loss': // 1 kg/week
							f = 7700 * -1;
							break;
						case 'mild gain': // 0.25 kg/week
							f = 0.25 * 7700;
							break;
						case 'gain': // 0.5 kg/week
							f = 0.5 * 7700;
							break;
						case 'fast gain': // 1 kg/week
							f = 7700;
							break;
					}
					return Math.round( b + f/7 );
				}
			} catch ( err ) { return null; }
		};
	}

	if ( ! ( 'IBW' in window ) ) {
		window['IBW'] = window['ibw'] = function(h, g)
		{
			try {
				if ( typeof g  == 'string' ) {
					g = ( 'female' == g.toLowerCase() ) ? 1 : 0;
				}

				var b = g ? 45.5 : 50,
					f = ( h * 100 / 30.48 - 5 ) * 12;

				if ( f < 0 ) {
					return null;
				}

				f = Math.max( 0, f ) * 2.3;
				return Math.round( ( b + f ) * 100 ) / 100;

			} catch ( err ) { return null; }
		};
	}

	if ( ! ( 'PREGNANCY' in window ) ) {
		window['PREGNANCY'] = window['pregnancy'] = function(d, f, o)
		{
			try {

				if ( typeof o  == 'string' ) {
					o = ( 'conception' == o.toLowerCase() ) ? 1 : 0;
				}

				return GETDATETIMESTRING( DATETIMESUM(d, f, (o ? 14 : 40 * 7 ) ), f );

			} catch ( err ) { return null; }
		};
	}
})();