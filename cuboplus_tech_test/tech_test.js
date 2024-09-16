// cuboplus_tech_test.

const TotalBitcoins = 21_000_000;
const RecompensaInicial = 50;
const halving = 210_000;

// valores iniciales
let RecompensaActual = RecompensaInicial;
let BitcoinsMinados = 0;
let BloquesMinados =  0;
let ContadorHalving = 0;

// esta funcion nos calculara el porcentaje de lo que se lleva minado
function porcentajeMinado(TotalMinado, TotalBitcoinsMinados){
    return (TotalMinado / TotalBitcoinsMinados) * 100;
}

// Vamos a simular los eventos halving
while (BitcoinsMinados < TotalBitcoins){
    ContadorHalving++;
    const MinadosPeriodoActual = RecompensaActual * halving;
    BitcoinsMinados += MinadosPeriodoActual;
    BloquesMinados += halving;

    const BitcoinsSATS = BitcoinsMinados * 100_000_000;
    const RecompensaActualSATS = RecompensaActual * 100_000_000;

    const PorcentajeMinado = porcentajeMinado(BitcoinsMinados, TotalBitcoins);

    // imprimimos la informacion en la consola
    console.log(`Halving ${ContadorHalving}: `);
    console.log(`Recompensa por bloque: ${RecompensaActualSATS.toFixed(0)} SATS`);
    console.log(`Total de bitcoins minados: ${BitcoinsSATS.toFixed(0)} SATS (${BitcoinsMinados.toFixed(8)} BTC)`);
    console.log(`Porcentaje total minado: ${PorcentajeMinado.toFixed(2)}%\n`);

    RecompensaActual /= 2;

    if (RecompensaActual === 0) break;
}