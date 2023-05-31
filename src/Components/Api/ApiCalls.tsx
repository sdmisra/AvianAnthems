
// type fetchRecordingsProps {
//   url: string
// }

const fetchRecordings = (url: string) => {

  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
}

export default fetchRecordings;