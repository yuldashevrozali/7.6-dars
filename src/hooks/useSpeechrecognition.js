import { useEffect, useState } from "react";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

export default () => {
    const [support, setSupport] = useState(true);
    const [result, setResult] = useState(null);
    const [listening, setListening] = useState(false);

    const onend = () =>  {
        setListening(false)
    }

    const onresult = e => {
        setResult(e.results[0][0].transcript)
    }

    useEffect(() => {
        if (!recognition) {
            setSupport(false);
        }

        if (recognition) {
            recognition.addEventListener('result', onresult)
            recognition.addEventListener('end', onend)
        }
    }, []);

    const start = () => {
        if (support) {
            recognition.start();
            setListening(true);
        }
    }

    return {
        support,
        start,
        result,
        listening
    };

}