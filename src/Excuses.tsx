

interface Props {
    excuse: string[];
}

const Excuses = ({ excuses }: Props) => {

    return (
        <div>
            <h2>Lista wymówek</h2>
            {excuses.length === 0 ? (
                <p>Brak wymówek.</p>
            ) : (
                <ul>
                    {excuses.map((excuse, index) => (
                        <li key={index}>{excuse}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Excuses;
