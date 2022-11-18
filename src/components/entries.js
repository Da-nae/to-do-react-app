import Checkboxes from './checkboxes.js';

function Entries() {
    return (
        <section className="toDoEntries">
            <ul>
                <li>
                    <Checkboxes />
                    <p className="toDoSingleEntries">Style this page</p>
                </li>
                <li>
                    <Checkboxes />
                    <p className="toDoSingleEntries">Learn React</p>
                </li>
                <li>
                    <Checkboxes />
                    <p className="toDoSingleEntries">Be cool</p>
                </li>
            </ul>
        </section>
    )
}

export default Entries