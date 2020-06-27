
export const inputNum1 = document.querySelector("#numero1")
export const inputNum2 = document.querySelector("#numero2")
export const resul = document.querySelector("#resu")

export const parseInputs = (input) => {
    return parseInt(input.value)
}

export const clearA = () =>{
    return resul.innerHTML = ''
}

export const resultadoView = (res) => {
    resul.insertAdjacentHTML('beforeend', res)
}

export const clear = () => {
    document.getElementById("resu").value= ' ';
  }

//export const getInput = () => elements.searchInput.value;

// export const clearNum = () => {
//     elements.inputNum1.innerHTML = '';
//     elements.inputNum2.innerHTML = '';
// }

// export const clearResul = () => {
//     elements.searchReslist.innerHTML = '';
//     elements.searchResPages.innerHTML = '';
// }