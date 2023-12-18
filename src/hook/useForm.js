import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    //traer nombre
    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState ({...formState, [name]:value})
    }

    //estado inicial
    const onResetForm = ({}) => {
        setFormState (initialForm)
    }

    //devolver resultados
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}