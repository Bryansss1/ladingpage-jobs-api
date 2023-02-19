import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoMatch from "../assets/logoacolorpng.png"

const Verify_email = () => {


const {email,pass}=useParams()
const [users,setUsers]=useState([])
const [ready,setRe]=useState("Este correo no existe")

useEffect(()=>{
axios.get("https://backapijobs-production-ad45.up.railway.app/api/v1/users/all")
.then(res=>setUsers(res.data))
.catch(error=>console.log(error))


axios.get(`https://backapijobs-production-ad45.up.railway.app/api/v1/auth/verify_email/${email}/id_user/${pass}`)
.then(res=>setRe(`Tu cuenta ${email} ya ha sido confirmado✔️`))
.catch(error=>setRe("Este correo no existe"))
},[])


const resultt=users.filter(user=>user.email==email && user.id==pass)
console.log(resultt)

    return (
        <section className='verify-email-seccion'>
        <img className='logo-image' src={logoMatch} alt="logo de jobs matches" />

        {resultt.length==0?
        <article>
        <h1>{ready}</h1>
        <p>verifica si este correo fue registrado o el link este funcionando</p>
        </article>
        :
        <article>
        <h1>{ready}</h1>
        <p>ya puedes logearte en la app🖥️</p>
        <small>Jobs match tu mejor opcion a la hora de buscar trabajo 💼</small>
        </article>
        }
        <footer>
        <img className='logo-image two' src={logoMatch} alt="logo de jobs matches" />
        <p>©Todos los derechos reservados a jobs matchs 2023-2023</p>
        </footer>
        </section>
    );
};

export default Verify_email;