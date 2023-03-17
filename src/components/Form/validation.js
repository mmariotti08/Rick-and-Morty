const validation =(userData, errors, setErrors)=>{
    //username
    if(!userData.username) setErrors({...errors, username:"Por favor completa este campo"});
    else if(userData.username.length > 35) setErrors({...errors, username:"No puedes superar los 35 caracteres"});
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) setErrors({...errors, username:"Email invalido"});
    else{ setErrors({...errors, username:""})};

    //password
    if(userData.password.length < 6 || userData.password.length > 10 ){  setErrors({...errors, password:"Debe contener entre 6 y 10 caracteres"});
    }else if(!/\d/.test(userData.password)){ setErrors({...errors, password:"Debe contener al menos un numero"});
    }else { setErrors({...errors, password:""})}


}

export default validation;