import React, { useState } from "react";

const FormularioComponent = () => {
  const [user, setUser] = useState({});

  const getDataForm = (e) => {
    e.preventDefault();
    let data = e.target;
    let user = {
      name: data.name.value,
      lastname: data.last_name.value,
      gender: data.gender.value,
      biography: data.biography.value,
    };
    console.log(user);
    setUser(user);
  };
  return (
    <div>
      <h1>Formularios en React</h1>
      <form onSubmit={getDataForm}>
        <input type="text" name="name" placeholder="Nombre"></input>

        <input type="text" name="last_name" placeholder="Apellido"></input>

        <select name="gender">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <textarea placeholder="biografía" name="biography"></textarea>

        <input type="submit" value="Enviar"></input>
      </form>
      <br />
      {user.biography && user.biography.length >= 1 && (
        <div className="info_user">
          {user.name}&nbsp;{user.last_name} es un {user.gender} y su biografía
          es esta: <p>{user.biography}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioComponent;
