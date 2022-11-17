import Checkboxes from './checkboxes.js';

function Entries() {
    return (
        <section className="toDoEntries">
            <div>
                <Checkboxes />
                <p className="toDoSingleEntries">Style this page</p>
            </div>
            <div>
                <Checkboxes />
                <p className="toDoSingleEntries">Learn React</p>
            </div>
            <div>
                <Checkboxes />
                <p className="toDoSingleEntries">Be cool</p>
            </div>
        </section>
    )
}

export default Entries