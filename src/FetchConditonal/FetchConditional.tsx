import React from 'react'
import fetchRecordings from '../Components/Api/ApiCalls'

type ApiResponse = {
  recordings: Recording[] | undefined
}

type Recording = {
  type: string
}

export function FetchConditional(selectedCnt: string, selectedType:string): Promise<Recording[]> {

  console.log(selectedType)
  const correctType = selectedType?.split('-').join(' ')
console.log(correctType)

  const correctCountry = selectedCnt.split(' ').join('%20')
  // console.log(correctCountry)

  // const correctType = selectedType

  // const combinedParameters = `${selectedCnt}-${selectedType}`

  // switch (combinedParameters) {
      // case 'United States-flight-song':
        return fetchRecordings(`https://xeno-canto.org/api/2/recordings?query=cnt:%22=${correctCountry}`)
        .then((data: ApiResponse) => {
          // const filtered = data.recordings?
          const filtered = data.recordings?.filter(recording => recording.type.includes(`${correctType}`)) ?? []
          // console.log(filtered)
          return filtered
          // this.setState({ searchResults: filtered})
        })
        // break;
        // default:
          // console.log('still works')
          // return Promise.resolve([])
}
