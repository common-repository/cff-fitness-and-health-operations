fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery[ 'fbuilder' ] = fbuilderjQuery[ 'fbuilder' ] || {};
fbuilderjQuery[ 'fbuilder' ][ 'modules' ] = fbuilderjQuery[ 'fbuilder' ][ 'modules' ] || {};

fbuilderjQuery[ 'fbuilder' ][ 'modules' ][ 'fitness-health' ] = {
	'tutorial' : 'https://cff-bundles.dwbooster.com/product/fitness-health-operations',
	'toolbars'		: {
		'fitness-health' : {
			'label' : 'Fitness and Health',
			'buttons' : [
							{
								"value" : "BMI",
								"code"  : "BMI(",
								"tip"   : "<p><strong>Calculates the Body Mass Index based on the user’s height and weight.</strong></p>"+
								"<p>It accepts three parameters: weight (in Kg), height (in meters), and textual output (true or false) (optional, default false)</p>"+
								"<p>When the textual output is true, the operation result would be any of the following texts: Severe Thinness, Moderate Thinness, Mild Thinness, Normal, Overweight, Obese Class I, Obese Class II, Obese Class III.</p>"+
								"<p>Ex: <strong>BMI(85, 1.65)</strong> Result: <strong>31.2</strong></p>"+
								"<p>Ex: <strong>BMI(85, 1.65, true)</strong> Result: <strong>Obese Class I</strong></p>"+
								"<p>For weight in pounds, divide its value by 2.2<br>Ex: <strong>BMI(187/2.2, 1.65)</strong> Result: <strong>31.2</strong></p>"+
								"<p>For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m<br>Ex: If the user’s height is 5 ft and 4.96 in <strong>BMI(85, 5*0.3048+4.96*0.0254)</strong> Result: <strong>31.2</strong></p>"
							},
							{
								"value" : "BFP",
								"code"  : "BFP(",
								"tip"   : "<p><strong>The Body Fat Percentage calculator estimates the total body fat percentage.</strong></p>"+
								"<p>It accepts five parameters: weight (in Kg), height (in meters), gender (male or 0, female or 1), age (in years), and textual output (true or false) (optional, default false)</p>"+
								"<p>When the textual output is true, the operation result would be any of the following texts: Underfat, Healthy, Overweight, Obese.</p>"+
								"<p>Ex: <strong>BFP(85, 1.65, &quot;male&quot;, 44)</strong> Result: <strong>31.39</strong></p>"+
								"<p>Ex: <strong>BFP(85, 1.65, &quot;male&quot;, 44, true)</strong> Result: <strong>Obese</strong></p>"+
								"<p>For weight in pounds, divide its value by 2.2<br>Ex: <strong>BFP(187/2.2, 1.65, &quot;male&quot;, 44)</strong> Result: <strong>31.39</strong></p>"+
								"<p>For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m<br>Ex: If the user’s height is 5 ft and 4.96 in <strong>BFP(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44)</strong> Result: <strong>31.39</strong></p>"
							},
							{
								"value" : "BMR",
								"code"  : "BMR(",
								"tip"   : "<p><strong>The Basal Metabolic Rate calculator estimate the number of calories a person needs to consume each day.</strong></p>"+
								"<p>It accepts five parameters: weight (in Kg), height (in meters), gender (male or 0, female or 1), age (in years), and activity level (bmr, sedentary, light, moderate, active, very, extra)</p>"+
								"<p>"+
								"<b>bmr</b>: amount of energy expended per day at rest.<br>"+
								"<b>sedentary</b>: little or no exercise.<br>"+
								"<b>light</b>: exercise 1-3 times/week.<br>"+
								"<b>moderate</b>: exercise 4-5 times/week.<br>"+
								"<b>active</b>: daily exercise or intense exercise 3-4 times/week.<br>"+
								"<b>very</b>: intense exercise 6-7 times/week.<br>"+
								"<b>extra</b>: very intense exercise daily, or physical job.<br>"+
								"</p>"+
								"<p>Ex: <strong>BMR(85, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;)</strong> Result: <strong>2000</strong></p>"+
								"<p>For weight in pounds, divide its value by 2.2<br>Ex: <strong>BMR(187/2.2, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;)</strong> Result: <strong>2000</strong></p>"+
								"<p>For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m<br>Ex: If the user’s height is 5 ft and 4.96 in <strong>BMR(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44, &quot;sedentary&quot;)</strong> Result: <strong>2000</strong></p>"
							},
							{
								"value" : "WEIGHTGOAL",
								"code"  : "WEIGHTGOAL(",
								"tip"   : "<p><strong>The Goal Weight Calculator estimates the number of calories a person needs to consume each day to reach his/her goal weight.</strong></p>"+
								"<p>It accepts six parameters: weight (in Kg), height (in meters), gender (male or 0, female or 1), age (in years), and activity level (bmr, sedentary, light, moderate, active, very, extra), goal (maintain, mild loss, loss, extreme loss, mild gain, gain, fast gain)</p>"+
								"<p>Ex: <strong>WEIGHTGOAL(85, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)</strong> Result: <strong>1725</strong></p>"+
								"<p>For weight in pounds, divide its value by 2.2<br>Ex: <strong>WEIGHTGOAL(187/2.2, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)</strong> Result: <strong>1725</strong></p>"+
								"<p>For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m<br>Ex: If the user’s height is 5 ft and 4.96 in <strong>WEIGHTGOAL(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)</strong> Result: <strong>1725</strong></p>"
							},
							{
								"value" : "IBW",
								"code"  : "IBW(",
								"tip"   : "<p><strong>The Ideal Body Weight Calculator estimates ideal weight (in Kg) based on the person height, and gender.</strong></p>"+
								"<p>It accepts two parameters: height (in meters), and gender (male or 0, female or 1)</p>"+
								"<p>Ex: <strong>IBW(1.65, &quot;male&quot;)</strong> Result: <strong>61.41</strong></p>"+
								"<p>For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m<br>Ex: If the user’s height is 5 ft and 4.96 in <strong>IBW(5*0.3048+4.96*0.0254, &quot;male&quot;)</strong> Result: <strong>61.41</strong></p>"
							},
							{
								"value" : "PREGNANCY",
								"code"  : "PREGNANCY(",
								"tip"   : "<p><strong>Determines the conception or due dates based on the first day of last menstrual period.</strong></p>"+
								"<p>It accepts three parameters: date, date format (Ex. dd/mm/yyyy), and output (due or 0, conception or 1)</p>"+
								"<p>Ex: <strong>PREGNANCY(&quot;05/14/2022&quot;, &quot;mm/dd/yyyy&quot;, &quot;due&quot;)</strong> Result: <strong>02/18/2023</strong></p>"+
								"<p>Ex: <strong>PREGNANCY(&quot;05/14/2022&quot;, &quot;mm/dd/yyyy&quot;, &quot;conception&quot;)</strong> Result: <strong>05/28/2022</strong></p>"
							}
						]
		}
	}
};