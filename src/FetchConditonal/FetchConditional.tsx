import React from 'react'
import fetchRecordings from '../Components/Api/ApiCalls'

type ApiResponse = {
  recordings: Recording[] | undefined
}

type Recording = {
  type: string
}

export function FetchConditional(selectedCnt: string, selectedType:string): Promise<Recording[]> {


  const combinedParameters = `${selectedCnt}-${selectedType}`
  switch (combinedParameters) {
      case 'United States-flight-song':
        return fetchRecordings('https://xeno-canto.org/api/2/recordings?query=cnt:%22=United%20States')
        .then((data: ApiResponse) => {
          const filtered = data.recordings?.filter(recording => recording.type === 'flight call') ?? []
          // console.log(filtered)
          return filtered
          // this.setState({ searchResults: filtered})
        })
        break;
        default:
          console.log('still works')
          return Promise.resolve([])
        }
}