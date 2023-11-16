
import { Card } from './components/FolowCards/Card.jsx';

export function App() {

    const users = [
        {
            name: "Alejandro",
            username: "cuenta1",
            isFolowing: true
        },
        {
            name: "Melina",
            username: "cuenta2",
            isFolowing: false
        },
        {
            name: "Sofia",
            username: "cuenta3",
            isFolowing: true
        }
    ]
    const formatUserName = (userName) => `@${userName}`

    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Esto es un párrafo</p>
            {
                users.map((user, index) => {
                    return (
                        <Card
                            key={index}
                            user={user}
                            formatUserName={formatUserName}
                        />
                    )
                })
            }
        </>
    );
}