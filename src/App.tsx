import React, { useState } from "react";
import Form, { ExcuseData } from "./Form";
import Excuses from "./Excuses";

function App() {
    const [excuses, setExcuses] = useState<string[]>([]);

    const handleAddExcuse = (data: ExcuseData) => {
        const newExcuse = `Panie Profesorze, niestety ${data.name || 'anonim'} ${data.reason === 'spóźnienie'
            ? 'spóźniłem się'
            : data.reason === 'niedostarczenie pracy domowej'
                ? 'nie dostarczyłem pracy domowej'
                : 'nie odpowiedziałem na wiadomość'}, ponieważ ${data.details || 'nie mogę o tym mówić'}.
Poziom wiarygodności: ${data.reliability}, data: ${data.date}, kreatywność: ${data.creativity}, pilność: ${data.urgent ? 'tak' : 'nie'}.`;

        setExcuses(prev => [newExcuse, ...prev]);
    };

    return (
        <div className="App">
            <h1>Excuse Generator</h1>
            <Form onSubmit={handleAddExcuse} />
            <Excuses excuses={excuses} />
        </div>
    );
}

export default App;
