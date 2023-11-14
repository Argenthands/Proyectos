
import { Card } from './components/Card';

export function App() {

    const users = [
        {
            name: "Alejandro",
            username: "@cuenta1"
        },
        {
            name: "Melina",
            username: "@cuenta2"
        },
        {
            name: "Sofia",
            username: "@cuenta3"
        }
    ]

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
                        />
                    )
                })
            }
        </>
    );
}