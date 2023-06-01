import fetchRecordings from '../Components/Api/ApiCalls'

type ApiResponse = {
  recordings: Recording[] | undefined
}

type Recording = {
  type: string
}

export async function FetchConditional(selectedCnt: string, selectedType:string): Promise<Recording[]> {
  // console.log(selectedType)
  const correctType = selectedType?.split('-').join(' ')
  // console.log(correctType)
  const correctCountry = selectedCnt.split(' ').join('%20')

        return await fetchRecordings(`https://xeno-canto.org/api/2/recordings?query=cnt:%22=${correctCountry}`)
        .then((data: ApiResponse) => {
          const filtered = data.recordings?.filter(recording => recording.type.includes(`${correctType}`)) ?? []
          return filtered
        })
}