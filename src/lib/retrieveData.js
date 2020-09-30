import data from '../assets/data/stations.json';

const retrieveData = () => {
  return [...data.stations];
}

export default retrieveData;