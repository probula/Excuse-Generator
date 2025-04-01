import './App.css'
import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('wybierz');
    const [reliability, setReliability] = useState(5);
    const [date, setDate] = useState("");
    const [creativity, setCreativity] = useState('wybierz');
    const [details, setDetails] = useState('');
    const [urgent, setUrgent] = useState(false);

    const excuses = {
        "spóźnienie": "kosmici porwali mojego psa",
        "niedostarczenie pracy domowej": "mój chomik zjadł moją pracę",
        "brak odpowiedzi na wiadomość": "telefon mi eksplodował",
    };



    return (
        <>
            <form>
                <label>
                    Podaj imię:
                    <input type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Powód wymówki:
                    <select value={reason} onChange={(e) => setReason(e.target.value)}>
                        <option>wybierz</option>
                        <option>spóźnienie</option>
                        <option>niedostarczenie pracy domowej</option>
                        <option>brak odpowiedzi na wiadomość</option>
                    </select>
                </label>
                <label>
                    Poziom wiarygodności:
                    <input type={'range'} min={0} max={10} value={reliability}
                           onChange={(e) => setReliability(Number(e.target.value))} />
                </label>
                <label>
                    Data zdarzenia: <input type={'date'} value={date} onChange={(e) => setDate(e.target.value)}></input>
                </label>
                <label>
                    Poziom kreatywności: <select value={creativity} onChange={(e) => setCreativity(e.target.value)}>
                        <option>wybierz</option>
                        <option>duży</option>
                        <option>średni</option>
                        <option>mały</option>
                    </select>
                </label>
                <label>
                    Dodatkowe szczegóły: <textarea id={"textarea"} value={details} onChange={(e) => setDetails(e.target.value)}>
                    </textarea>
                </label>
                <label>
                    Pilność wymówki: <input type={"checkbox"} checked={urgent} onChange={(e) => setUrgent(e.target.checked)}></input>
                </label>
                <label>
                    <input type={"button"} value={"Wyślij"}></input>
                </label>
            </form>
        </>
    )
}

export default App;
