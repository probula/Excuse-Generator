import Form from "./Form.tsx";
import Excuses from "./Excuses.tsx";

function App() {

    function getExcuse(excuse: string) {
        console.log(excuse);
    }


    return (
        <>
            <Form getData={getExcuse} />
            <Excuses />
        </>
    )
}

export default App;
