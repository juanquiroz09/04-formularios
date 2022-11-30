import React from 'react'

const FormularioComponent = () => {
    const getDataForm = (e) => {
        let data = e.target;
    };
  return (
    <div><h1>Formularios en react</h1>
        <form onSubmit={getDataForm}>
            <input type="text" placeholder="Nombre"></input>

            <input type="text" placeholder="Apellido"></input>

            <select>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>

            <textarea placeholder='biografía'></textarea>
      
            <input type="submit" value="Enviar"></input>

        </form>
    </div>
  )
}

export default FormularioComponent