export function callScrapper(){
    fetch('../scrapers/senscritique_note.py', {
      method: 'POST'
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
}