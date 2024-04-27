export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `San Francisco is a city in the US. The population is 884,363. The city was founded in 1776. The city has a budget of ${budget.income} in ${year}. The GDP is ${budget.gdp} and the capita is ${budget.capita}.`;
}
