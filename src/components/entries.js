import Checkboxes from './checkboxes.js';

function Entries() {
    const toDoEntries = ['Style this page','Learn React','Be cool'];

    return (
        <section className="toDoEntries">
            <ul>
                {toDoEntries.map((entry) => (
                    <li>
                        <Checkboxes />
                        <p className="toDoSingleEntries">{entry}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries