import React, {useRef, useState, useEffect} from "react";
import { useForm, Controller } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './style.css'
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import cursos from "../../cursos.json";


import CardSearch from '../../components/cardSearch/CardSearch';
export default function HookFormDoc() {

    const toast = useRef(null);

    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('')

    const [mostrarCursos, setMostrarCursos] = useState(false)

    useEffect(() => {
        console.log('Prompt updated:', prompt);
    }, [prompt]);

    const handleGetJson = async () => {
        show()

        console.log(`Sending prompt: ${prompt}`);
        const response = await fetch('http://localhost:5000/search2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt}),
        });

        const apiResult = await response.json(); // Use a different name for the result
        console.log("Success:", apiResult);
        setResult(apiResult.result);
        setMostrarCursos(true)

        reset();

    }

    const courses = [
        { name: 'Pensamiento Analítico e Innovación  ', code: 1},
        { name: 'Aprendizaje Activo y Estrategias de Aprendizaje  ', code: 2},
        { name: 'Resolución de Problemas Complejos  ', code: 3},
        { name: 'Pensamiento Crítico y Análisis  ', code: 4},
        { name: 'Creatividad, Originalidad e Iniciativa  ', code: 5 },
        { name: 'Liderazgo e Influencia Social  ', code: 6},
        { name: 'Uso, Seguimiento y Control de la Tecnología  ', code: 7 },
        { name: 'Diseño y Programación de Tecnología  ', code: 8 },
        { name: 'Resiliencia, Tolerancia al Estrés y Flexibilidad  ', code: 9},
        { name: 'Razonamiento, Resolución De Problemas e Ideación  ', code: 10 }
    ];

    const show = () => {
        const values = getValues('value');
        const codes = values.map((valor) => valor.code-1);


        console.log(codes)

        const detail = values.map((value, i) => value.name + (i < values.length - 1 ? ', ' : ''));

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail });
    };

    const defaultValues = {
        value: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });


    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const courseTemplate = (option) =>
    {
      return(
        <div className="flex align-items-center">
            <span style={{ width: '18px', display: 'inline-block' }}></span>
            <div>{option.name}</div>
        </div>
      ) ;
    };

    const [modalDescription, setModalDescription] = useState(''); 
  const [mostrarModal, setMostrarModal] = useState(false);
    const abrirModal = (description) => {
        setModalDescription(description);
        console.log('mostrando modal');
        setMostrarModal(true);
      };
      
      const cerrarModal = () => {
        setMostrarModal(false);
      };

      const handleClick = (descripcion) => {
        console.log('abriendo modaaal');
        setModalDescription(descripcion);
        setMostrarModal(true);
      }

    return (
        <div >
            <form onSubmit={handleSubmit(handleGetJson)} className="flex flex-col align-items-center gap-44 searchbar">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field }) =>

                        <MultiSelect
                            id={field.name}
                            name="value"
                            value={field.value}
                            options={courses}
                            onChange={(e) => {field.onChange(e.value); setPrompt(e.target.value.map((valor) => valor.code-1));}}
                            optionLabel="name"
                            display = 'chip'
                            placeholder="Select Courses"
                            filter
                            panelStyle={{ maxWidth: '20rem', marginTop: '1rem' }}
                            className="w-full md:w-40rem"
                            itemTemplate={(option) => (
                                <div className="p-multiselect-token">
                                    <span className="p-chips-token-label">{option.name}</span>
                                </div>
                            )}

                        />

                    }
                />

                {getFormErrorMessage('value')}
                <Button  type="submit" label="Buscar" className="ml-6 mt-2 border-ra" />
            </form>

            <div className="coursesList">
            {cursos.map(item =>(
                    <CardSearch
                    key = {item.id}
                    title = {item.titulo}
                    area = {item.area}
                    descripcion={item.descripcion}
                    onClick={handleClick}
                    />
                ))}

{mostrarModal && (
      <div className="modal">
        <div className="modal-content">
            <h4>Descripción del curso</h4>
        <p>{modalDescription}</p>
        <button onClick={()=>setMostrarModal(false)}>Cerrar </button>
            </div>
      </div>
    )}
                
            </div>

            


            
        </div>
    )
}
