function imprimeEscada(n) {
	for (let degraus = 1; degraus <= n; degraus++) {
		let qtdeDeEspacoVazio = n - degraus;
		let resultado = ' '.repeat(qtdeDeEspacoVazio) + '*'.repeat(degraus);
		console.log(resultado);
	}
}

/*Entrada*/
imprimeEscada(6);

/* Saída
     *
    **
   ***
  ****
 *****
******
 */
