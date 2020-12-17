import { validateURL } from './validateURL'

function handleSubmit(event) {
    event.preventDefault();

    //Gives error messages when the wrong URL is given
    // check what text was put into the form field
    let url = document.getElementById('url').value
    if (!validateURL(url)) {
        console.log('URL is not valid');
        return;
    }

    console.log("::: Form Submitted :::")
    fetch('//localhost:8081/sentiment-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('nlp-text').innerHTML = res.text;
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
    })
}

export { handleSubmit }
