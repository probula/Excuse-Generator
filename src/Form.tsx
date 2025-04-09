import React, { useState } from "react";
import './Form.css';

interface Props{
    onSubmit: (data: ExcuseData) => void;
}

export interface ExcuseData {
    name: string;
    reason: string;
    reliability: number;
    date: string;
    creativity: string;
    details: string;
    urgent: boolean;
}

const Form = ({ onSubmit }: Props) => {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('spóźnienie');
    const [reliability, setReliability] = useState(5);
    const [date, setDate] = useState('');
    const [creativity, setCreativity] = useState('średni');
    const [details, setDetails] = useState('');
    const [urgent, setUrgent] = useState(false);

    function getMsg(text: string) {
        console.log("Zmieniono:", text);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData: ExcuseData = {
            name,
            reason,
            reliability,
            date,
            creativity,
            details,
            urgent,
        };
        onSubmit(formData);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setReason('spóźnienie');
        setReliability(5);
        setDate('');
        setCreativity('średni');
        setDetails('');
        setUrgent(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                           onChange={(e) => setReliability(Number(e.target.value))}/>
                </label>
                <label>
                    Data zdarzenia: <input type={'date'} value={date} onChange={(e) => setDate(e.target.value)}/>
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
                    Dodatkowe szczegóły: <textarea id={"textarea"} value={details}
                                                   onChange={(e) => setDetails(e.target.value)}/>
                </label>
                <label>
                    Pilna:
                    <input
                        type="checkbox"
                        checked={urgent}
                        onChange={(e) => {
                            setUrgent(e.target.checked);
                            getMsg(e.target.checked ? "Pilna" : "Niepilna");
                        }}
                    />
                </label>
                <button type="submit">Generuj wymówkę</button>
            </form>
        </div>
    );
};

export default Form;
