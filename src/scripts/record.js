// more documentation available at
// https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

// the link to your model provided by Teachable Machine export panel
const URL = 'https://teachablemachine.withgoogle.com/models/Z1BEnKW_g/';

async function createModel() {
    const checkpointURL = URL + 'model.json'; // model topology
    const metadataURL = URL + 'metadata.json'; // model metadata

    const recognizer = speechCommands.create(
        'BROWSER_FFT', // fourier transform type, not useful to change
        undefined, // speech commands vocabulary feature, not useful for your models
        checkpointURL,
        metadataURL);

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
}

async function initrecord() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const normalizeLabel = label => label.toLowerCase().replace(/\s+/g, '');

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    let lastActiveWord = null;

    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class

        // Find the highest-scoring label above threshold
        let bestIndex = -1;
        let bestScore = 0.75;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > bestScore) {
                bestScore = scores[i];
                bestIndex = i;
            }
        }

        const activeWord = bestIndex >= 0 ? classLabels[bestIndex] : null;

        if (activeWord !== lastActiveWord) {
            if (lastActiveWord) {
                const lastElement = document.querySelector(`.words .${normalizeLabel(lastActiveWord)}`);
                if (lastElement) lastElement.style.color = 'white';
            }
            if (activeWord) {
                const newElement = document.querySelector(`.words .${normalizeLabel(activeWord)}`);
                if (newElement) newElement.style.color = '#08FF55';
            }
            lastActiveWord = activeWord;
        }
    }, {
        includeSpectrogram: false,
        overlapFactor: 0.5,
        invokeCallbackOnNoiseAndUnknown: true
    });
}

if (typeof window !== 'undefined') {
    window.initrecord = initrecord;
}