import suma from './models/indexModels';
import * as indexView from './views/indexView';


document.querySelector("#suma").addEventListener(("click"), () => {
    indexView.clear();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = suma(numero1,numero2)

    return indexView.resultadoView(resultado)
})

document.querySelector("#resta").addEventListener(("click"), () => {
    // indexView.clearNum();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = resta(numero1,numero2)

    return indexView.resultadoView(resultado)
})
document.querySelector("#multiplicacion").addEventListener(("click"), () => {
    // indexView.clearNum();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = multiplicacion(numero1,numero2)

    return indexView.resultadoView(resultado)
})

document.querySelector("#division").addEventListener(("click"), () => {
    // indexView.clearNum();

    const numero1 = indexView.parseInputs(indexView.inputNum1)
    const numero2 = indexView.parseInputs(indexView.inputNum2)
    const resultado = division(numero1,numero2)

    return indexView.resultadoView(resultado)
})