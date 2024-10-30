=== CFF Fitness and Health Operations ===
Contributors: codepeople
Tags:cff,fitness,health,operation,equation,calculated,calculated fields form,formula
Donate link: https://cff-bundles.dwbooster.com/product/fitness-health-operations
Requires at least: 5.0
Requires PHP: 7.4
Tested up to: 6.7
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Implements fitness and health operations module to use with the Calculated Fields Forms equations.

== Description ==

The plugin implements the "Fitness and Health" operations module to be used from the equations of the ["Calculated Fields Form"](https://wordpress.org/plugins/calculated-fields-form/) plugin. The "Calculated Fields Form" plugin is a form builder with a lot of potential, and its "Calculated" control is one of its great strengths. It allows you to enter mathematical formulas, determine the distance between addresses, plot graphs, process dates, manage files, and many other operations.

[youtube https://youtu.be/ut1KiPDZNHA]

The "CFF Fitness and Health Operations" plugin enhances, even more, the possibilities of the ["Calculated Fields Form"](https://wordpress.org/plugins/calculated-fields-form/) plugin, including essential operations in fitness or health-related projects as listed below:

**BMI**: Calculates the Body Mass Index based on the user's height and weight. It accepts three parameters: weight (in Kg), height (in meters), and textual output (true or false) (optional, default false). When the textual output is true, the operation result would be any of the following texts: *Severe Thinness*, *Moderate Thinness*, *Mild Thinness*, *Normal*, *Overweight*, *Obese Class I*, *Obese Class II*, *Obese Class III*.

Ex: **BMI(85, 1.65)** Result: **31.2**
Ex: **BMI(85, 1.65, true)** Result: **Obese Class I**
For weight in pounds, divide its value by 2.2. Ex: **BMI(187/2.2, 1.65)** Result: **31.2**
For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m. Ex: If the user's height is 5 ft and 4.96 in **BMI(85, 5*0.3048+4.96*0.0254)** Result: **31.2**

**BFP**: The Body Fat Percentage calculator estimates the total body fat percentage. It accepts five parameters: weight (in Kg), height (in meters), gender (*male* or 0, *female* or 1), age (in years), and textual output (true or false) (optional, default false). When the textual output is true, the operation result would be any of the following texts: *Underfat*, *Healthy*, *Overweight*, *Obese*.

Ex: **BFP(85, 1.65, &quot;male&quot;, 44)** Result: **31.39**
Ex: **BFP(85, 1.65, &quot;male&quot;, 44, true)** Result: **Obese**
For weight in pounds, divide its value by 2.2. Ex: **BFP(187/2.2, 1.65, &quot;male&quot;, 44)** Result: **31.39**
For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m. Ex: If the user's height is 5 ft and 4.96 in **BFP(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44)** Result: **31.39**

**BMR**: The Basal Metabolic Rate calculator estimate the number of calories a person needs to consume each day. It accepts five parameters: weight (in Kg), height (in meters), gender (*male* or 0, *female* or 1), age (in years), and activity level (*bmr*, *sedentary*, *light*, *moderate*, *active*, *very*, *extra*)

*bmr*: amount of energy expended per day at rest.
*sedentary*: little or no exercise.
*light*: exercise 1-3 times/week.
*moderate*: exercise 4-5 times/week.
*active*: daily exercise or intense exercise 3-4 times/week.
*very*: intense exercise 6-7 times/week.
*extra*: very intense exercise daily, or physical job.

Ex: **BMR(85, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;)** Result: **2000**
For weight in pounds, divide its value by 2.2. Ex: **BMR(187/2.2, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;)** Result: **2000**
For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m. Ex: If the user's height is 5 ft and 4.96 in **BMR(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44, &quot;sedentary&quot;)** Result: **2000**

**WEIGHTGOAL**: The Goal Weight Calculator estimates the number of calories a person needs to consume each day to reach his/her goal weight. It accepts six parameters: weight (in Kg), height (in meters), gender (*male* or 0, *female* or 1), age (in years), and activity level (*bmr*, *sedentary*, *light*, *moderate*, *active*, *very*, *extra*), goal (*maintain*, *mild loss*, *loss*, *extreme loss*, *mild gain*, *gain*, *fast gain*)

Ex: **WEIGHTGOAL(85, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)** Result: **1725**
For weight in pounds, divide its value by 2.2. Ex: **WEIGHTGOAL(187/2.2, 1.65, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)** Result: **1725**
For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m. Ex: If the user's height is 5 ft and 4.96 in **WEIGHTGOAL(85, 5*0.3048+4.96*0.0254, &quot;male&quot;, 44, &quot;sedentary&quot;, &quot;mild loss&quot;)** Result: **1725**

**IBW**: The Ideal Body Weight Calculator estimates ideal weight (in Kg) based on the person height, and gender. It accepts two parameters: height (in meters), and gender (*male* or 0, *female* or 1)

Ex: **IBW(1.65, &quot;male&quot;)** Result: **61.41**
For heights in feet and inches, 1 foot = 0.3048 m and 1 in = 0.0254 m. Ex: If the user's height is 5 ft and 4.96 in **IBW(5*0.3048+4.96*0.0254, &quot;male&quot;)** Result: **61.41**

**PREGNANCY**: Determines the conception or due dates based on the first day of last menstrual period. It accepts three parameters: date, date format (Ex. dd/mm/yyyy), and output (*due* or 0, *conception* or 1)

Ex: **PREGNANCY(&quot;05/14/2022&quot;, &quot;mm/dd/yyyy&quot;, &quot;due&quot;)** Result: **02/18/2023**
Ex: **PREGNANCY(&quot;05/14/2022&quot;, &quot;mm/dd/yyyy&quot;, &quot;conception&quot;)** Result: **05/28/2022**

== Installation ==

To install the "CFF Fitness and Health Operations" plugin:

*	Go to the Plugins section on your WordPress.
*	Press the "Add New" button at the top of the Plugins section (or WordPress submenu).
*	Enter the "CFF Fitness and Health Operations" into the search box.
*	Press the corresponding "Install" button.
*	And finally, press the "Activate" one.

== Use ==

The "CFF Fitness and Health Operations" plugin includes the new "Fitness and Health" entry (see screenshots) in the operations list of the calculated fields (Insert a calculated field in the form and scroll down the operations list in your configuration). Once the "Fitness and Health" option is selected, the plugin enables the operations set and documentation. By clicking on the operation buttons, they are added to the equation's editor.

== Screenshots ==
01. Fitness and Health operations list item
02. Fitness and Health operations buttons
03. Equations editor and operation documentation

== Changelog ==

= 1.0.0 =

* First version released.