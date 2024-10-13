import React from "react";
import { Tarjeta, BlogPost } from "./Tarea1";
import { MatchNombre, PasswordInput, ValidationInput } from "./Tarea2";
import { CheckboxList } from "./Tarea3";
import { CheckboxListWithState } from "./Tarea4";
import '../../src/styles.css';

export default function Tareas(props) {
    return (
        <React.Fragment>
            <Tarjeta
                nombre="Germán Koch"
                titulo="Programador Front End"
                imagen="https://avatars.githubusercontent.com/u/98907572?s=400&u=d8f4dc96b6fcb31830786ed620160f8a800de205&v=4"
            />
            <BlogPost
                titulo="Ardillas"
                parrafos={`Hoy vi una ardilla.
                    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
                    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
                autor={{
                    nombre: "Germán Koch",
                    titulo: "Programador Front End",
                    imagen: "https://avatars.githubusercontent.com/u/98907572?s=400&u=d8f4dc96b6fcb31830786ed620160f8a800de205&v=4"
                }}
            />
            <MatchNombre nombre="german" />
            <PasswordInput minLength={8} />
            <ValidationInput validation={value => value === 'Tarea 2'} />
            <CheckboxList
                items={{
                    uno: false,
                    dos: true,
                    tres: false,
                }}
            />
            <CheckboxListWithState
                items={{
                    uno: false,
                    dos: true,
                    tres: false,
                }}
            />
        </React.Fragment>
    );
};