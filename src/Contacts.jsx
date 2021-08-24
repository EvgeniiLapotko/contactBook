import React, { useState, useEffect, useRef } from "react";
import { MdDeleteForever } from "react-icons/md";

const Contacts = ({
    contacts,
    deleteContact,
    getSearch,
    inputSearch,
    search,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (search.length > 0) {
        return (
            <section className="contacts">
                <h2 className="title title__contacts">Contacts</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input__add"
                        type="text"
                        placeholder="Search..."
                        ref={inputSearch}
                        onChange={getSearch}
                    />
                </form>
                <div className="contacts__inner">
                    {search.map((item, index) => {
                        return (
                            <div key={index} className="contacts__item">
                                <div className="contacts__item-name">
                                    {item.name}
                                </div>
                                <div className="contacts__item-box">
                                    <div className="contacts__item-tel">
                                        {item.number}
                                    </div>
                                    <MdDeleteForever
                                        className="contacts__item-icon"
                                        onClick={() => deleteContact(index)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    return (
        <section className="contacts">
            <h2 className="title title__contacts">Contacts</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="input__add"
                    type="text"
                    placeholder="Search..."
                    ref={inputSearch}
                    onChange={getSearch}
                />
            </form>
            <div className="contacts__inner">
                {contacts.map((item, index) => {
                    return (
                        <div key={index} className="contacts__item">
                            <div className="contacts__item-name">
                                {item.name}
                            </div>
                            <div className="contacts__item-box">
                                <div className="contacts__item-tel">
                                    {item.number}
                                </div>
                                <MdDeleteForever
                                    className="contacts__item-icon"
                                    onClick={() => deleteContact(index)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Contacts;
