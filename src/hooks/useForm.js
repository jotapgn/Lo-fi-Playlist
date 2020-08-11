import { useState} from 'react';


function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }
    function handleChange(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        )
    }

    function clearForm(){
        setValues(valoresIniciais)
    }

    return{
        values,
        handleChange,
        clearForm,
    }
} 

export default useForm;