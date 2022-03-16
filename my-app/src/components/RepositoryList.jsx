import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"

export function RepositoryList(props) {
    return (
        <section>
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem name="edu"></RepositoryItem>
            </ul>

        </section>
    )
}