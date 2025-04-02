import React, { useState } from "react";

const excuses = {
    "spóźnienie": "kosmici porwali mojego psa",
    "niedostarczenie pracy domowej": "mój chomik zjadł moją pracę",
    "brak odpowiedzi na wiadomość": "telefon mi eksplodował",
};

export const handleSubmit = (event: React.FormEvent<HTMLFormElement>, formData: Record<string, unknown>, setJsonDataState: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    setJsonDataState(jsonData);
};

const Excuses = () => {
    const [jsonDataState] = useState("");

    return (
        <div>
            <p>{jsonDataState}</p>;

        </div>
    );
};

export default Excuses;
