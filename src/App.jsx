import React, { useState, useRef, useEffect } from "react";
import Contacts from "./Contacts";
import Header from "./header";

const App = () => {
    const [login, setLogin] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [userName, setUserName] = useState("");
    const inputName = useRef("");
    const inputNum = useRef("");
    const inputSearch = useRef("");
    const [search, setSearch] = useState("");
    const userLog = "userLog";
    const userContact = `userContact`;

    useEffect(() => {
        const infoName = JSON.parse(localStorage.getItem(userLog));
        const infoContacts = JSON.parse(localStorage.getItem(userContact));
        if (infoName) {
            setLogin(true);
            setUserName(infoName);
        }
        if (infoContacts) {
            setContacts(infoContacts);
        }
    }, []);

    const logOut = () => {
        setLogin(false);
        localStorage.removeItem(userLog);
    };

    const handleSubmit = (e) => {
        e.preventDefault(e);
        const user = inputName.current.value;
        const num = inputNum.current.value;
        const newNumber = { name: user, number: num };
        const newContacts = [...contacts];
        newContacts.push(newNumber);
        localStorage.setItem(userContact, JSON.stringify(newContacts));
        setContacts(newContacts);
        inputName.current.value = "";
        inputNum.current.value = "";
    };

    const deleteContact = (id) => {
        const newList = contacts.filter((item, index) => {
            return id != index;
        });
        setContacts(newList);
        localStorage.setItem(userContact, JSON.stringify(newList));
    };

    const getName = () => {
        let newName = prompt("Введите Ваше Имя");

        setUserName(newName);
        setLogin(true);

        localStorage.setItem(userLog, JSON.stringify(newName));
    };

    const getSearch = () => {
        let a = inputSearch.current.value.toLowerCase();
        let sort = contacts.filter((item) => {
            return item.name.startsWith(a);
        });

        setSearch(sort);
    };

    return (
        <div className="app">
            <div className="container">
                <Header
                    login={login}
                    exit={logOut}
                    getName={getName}
                    name={userName}
                />
                <h1 className="title">PhoneBook</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="input__add"
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        ref={inputName}
                    />
                    <label className="label" htmlFor="number">
                        Number
                    </label>
                    <input
                        className="input__add"
                        id="number"
                        type="text"
                        placeholder="Enter number"
                        ref={inputNum}
                    />
                    <button className="submit">Add Contact</button>
                </form>
                <Contacts
                    contacts={contacts}
                    deleteContact={deleteContact}
                    getSearch={getSearch}
                    inputSearch={inputSearch}
                    search={search}
                />
            </div>
        </div>
    );
};

export default App;
