import React from "react";
import {NewContactReduxForm} from "../NewContact/NewContact";

export const UpdateContact = (props) => {
    //если здесь фу-ия которая будет в онсубмит то вот требования к ней:
    // 1. на верхнем уровне один аргумент который пойдет в пайлоад
    // 2. эта функция забирает пропс.айди и как-то передает в пут запрос
    // 3. эта функция не может диспатчить, может только та, которая придет от контейнера
    // 4. выясни, откуда берет фрмдату апдатер из контейнера
    // 5. вроде работает! разбери! запиши!!
    function solve(formData) {
        let id = props.id
        let a = 'fail'
        debugger // в id то что нужно
        props.updateContact(formData, id)
    }

    return (
        <div>
            {/*<NewContactReduxForm onSubmit={props.updateContact}/>*/}
            <NewContactReduxForm onSubmit={solve}/>
        </div>
    )
}