

interface Props {
    excuse: string[];
}

const Excuses = ({ excuse }: Props) => {

    return (
        <div>
            <h2>Lista wymówek</h2>
            {excuse.length === 0 ? (
                <p>Brak wymówek.</p>
            ) : (
                <ul>
                    {excuse.map((excuse, index) => (
                        <li key={index}>{excuse}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Excuses;
