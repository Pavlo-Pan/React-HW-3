import { useState } from "react";
import people from "./people";
import './List.module.css'
const List = () => {
    const [listPeople, setPeople] = useState(people);

    const removePerson = (id) => {
        setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
    };
    return (
        <div>
            <h2>Список приглашенных</h2>
            <ul>
                {listPeople.map((person) => (
                    <li key={person.id}>
                        {person.name}, {person.age} лет
                        <button
                            onClick={() => removePerson(person.id)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default List