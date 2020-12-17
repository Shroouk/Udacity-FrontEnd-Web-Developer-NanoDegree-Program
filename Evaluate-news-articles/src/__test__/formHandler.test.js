import { handleSubmit } from '../client/js/formHandler';

global.fetch = require("jest-fetch-mock");

describe('testing submit', () => {
    it('handleSubmit submits data', () => {
        document.body.innerHTML = `<main>
                <section>
                    <form class="" onsubmit="return Client.handleSubmit(event)">
                        <label for="url">Type in a URL to the text you want to analyse</label>
                        <input id="url" type="text" name="input" value="https://www.youtube.com/" placeholder="URL">
                        <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
                    </form>
                <section>

                <section>
                    <strong>Analysis Results:</strong>
                    <ul>
                        <li>
                            <h3>Text Polarity:</h3>
                            <p id="polarity"></p>
                            <h4>Confidence:</h4>
                            <p id="polarity_confidence"></p>
                        </li>
                        <li>
                            <h3>Text Subjectivity:</h3>
                            <p id="subjectivity"></p>
                            <h4>Confidence:</h4>
                            <p id="subjectivity_confidence"></p>
                        </li>
                        <li>
                            <h3>Text:</h3>
                            <p id="nlp-text"></p>
                        </li>
                    </ul>
                </section>
            </main>`;


        fetch.mockResponseOnce(JSON.stringify({ text: 'test' }));
        handleSubmit({ preventDefault: () => {} });

        expect(fetch.mock.calls.length).toEqual(1);

    })
})
