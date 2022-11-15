import transferStations from './traTransferStations.js'

function getTransfersByTraStationId (id) {
  return transferStations
    .find(item => {
      return item.find(station => station.StationID === id && station.Service === 'TRA')
    })
    ?.filter(station => station.Service !== 'TRA') || []
}

export default getTransfersByTraStationId