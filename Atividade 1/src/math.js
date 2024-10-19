/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
    const somaDobroPares = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((soma, n) => soma + n, 0)
    return somaDobroPares;
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */

function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui
    let somaDobroPares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0) {
            somaDobroPares += numeros[i] * 2;
        }
    }
    return somaDobroPares;   
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
