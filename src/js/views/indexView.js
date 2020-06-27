
export const inputNum1 = document.querySelector("#numero1")
export const inputNum2 = document.querySelector("#numero2")
export const resul = document.querySelector("#resu")

export const parseInputs = (input) => {
    return parseInt(input.value)
}

export const clearResult = () =>{
    return resul.innerHTML = ''
}

export const clearInputs = () => {
    return document.getElementById("#numero1").value = "";
 }

export const resultadoView = (res) => {
    resul.insertAdjacentHTML('beforeend', res)
}

