import './App.css'

function App() {
    return (
        <>
            <form>
                <label>
                    Podaj imię:
                    <input type={'text'} />
                </label>
                <label>
                    Powód wymówki:
                    <select>
                        <option>wybierz</option>
                        <option>spóźnienie</option>
                        <option>niedostarczenie pracy domowej</option>
                        <option>brak odpowiedzi na wiadomość</option>
                    </select>
                </label>
                <label>
                    Poziom wiarygodności:
                    <input type={'range'} min={0} max={10} defaultValue={5} />
                </label>
                <label>
                    Data zdarzenia: <input type={'date'}></input>
                </label>
                <label>
                    Poziom kreatywności: <select>
                        <option>wybierz</option>
                        <option>duży</option>
                        <option>średni</option>
                        <option>mały</option>
                    </select>
                </label>
                <label>
                    Dodatkowe szczegóły: <textarea id={"textarea"}>

                    </textarea>
                </label>
                <label>
                    Pilność wymówki: <input type={"checkbox"}></input>
                </label>
                <label>
                    <input type={"button"} value={"Wyślij"}></input>
                </label>
            </form>
        </>
    )
}

export default App;
