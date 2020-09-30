import data from '../assets/data/stations.json';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const retrieveData = () => {
  return [...data.stations];
};

export default retrieveData;
