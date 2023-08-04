import React, { useState } from "react";
import styles from "./Pets.module.css";

export const Pets = () => {
    const [pets, setPets] = useState([]);

    return (
    <>
        { pets.map(pet => 
        <div className={styles.pets}>
            <div>ID: {pet.id}</div>
            <div>Name: {pet.name} </div>
            <div>Age: {pet.age}</div>
        </div>) 
        }
    </>
  )
};
