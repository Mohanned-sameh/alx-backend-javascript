export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return (
    `San Francisco is a city in the US, the population is around 884,363. ` +
    `The city was founded in 1776. The city's budget for ${year} is as follows: ` +
    `Income: ${budget.income}, GDP: ${budget.gdp}, Per Capita: ${budget.capita}.`
  );
}
