/**
* Generate random number
*
* @param  Number min
* @param  Number max
* @return Number
*/
export const randomNumber = (min = 1, max = 100): number => {
	return Math.round(Math.random() * (max - min) + min);
};
