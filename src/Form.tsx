import React, { useState } from "react";
import './Form.css';

interface PropsForm{
    getData: (m:string) => void
}

const Form = (props: PropsForm) => {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('wybierz');
    const [reliability, setReliability] = useState(5);
    const [date, setDate] = useState('');
    const [creativity, setCreativity] = useState('wybierz');
    const [details, setDetails] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [jsonDataState, setJsonDataState] = useState('');

    const formData = {
        name,
        reason,
        reliability,
        date,
        creativity,
        details,
        urgent,
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, formData: Record<string, unknown>) => {
        event.preventDefault();
        const jsonData = JSON.stringify(formData);
        setJsonDataState(jsonData);
        props.getData(jsonData);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
                <label>
                    Podaj imię:
                    <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
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
                    Data zdarzenia: <input type={'date'} value={date} onChange={(e) => setDate(e.target.value)} />
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
                    Dodatkowe szczegóły: <textarea id={"textarea"} value={details} onChange={(e) => setDetails(e.target.value)} />
                </label>
                <label>
                    Pilność wymówki: <input type={"checkbox"} checked={urgent} onChange={(e) => setUrgent(e.target.checked)} />
                </label>
                <label>
                    <input type={"submit"} value={"Wyślij"} />
                </label>
            </form>
            <div>
                <pre>{jsonDataState}</pre>
            </div>
        </div>
    );
};

export default Form;
