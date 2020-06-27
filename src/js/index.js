import * as indexModels from './models/indexModels';
import * as indexView from './views/indexView';


document.querySelector("#suma").addEventListener(("click"), () => {
    indexView.clearResult();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = indexModels.suma(numero1,numero2)

    return indexView.resultadoView(resultado)
})

document.querySelector("#resta").addEventListener(("click"), () => {
    indexView.clearResult();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = indexModels.rest(numero1,numero2)

    return indexView.resultadoView(resultado)
})
document.querySelector("#multiplicacion").addEventListener(("click"), () => {
    indexView.clearResult();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = indexModels.mult(numero1,numero2)

    return indexView.resultadoView(resultado)
})

document.querySelector("#division").addEventListener(("click"), () => {
    indexView.clearResult();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = indexModels.divi(numero1,numero2)

    return indexView.resultadoView(resultado)
})