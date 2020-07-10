const { body } = document;
try {
  body.style.backgroundColor = lumiance("#6633cc", 0.2);
} catch(e) {
  console.log("HOUVE UM ERRO: ", e.message);
}


function lumiance(hex, luminosity = 0) {
  hex = hex.replace(/[^0-9a-f]/gi, '') // replace = subistituir alguma coisa
  const isValidHex = hex.length === 6 || hex.length === 3
  if (!isValidHex) throw new Error("Invalid HEX")

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }


  // aumentar ou diminuir a luminosidade de um hex

  //transformar o hex em rgb
  //r (red) / g (green) / b (blue) = 0 á 255
  // 0 = black
  // 255 = white
  const black = 0;
  const white = 255;

  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

  let newHex = "#";
  for ( let twoDigit of twoDigitGroup) {
    const numberFromHex = parseInt(twoDigit, 16);
    const calculateLuminosity = numberFromHex + ( luminosity * 255 );

    const blackOrLuminosity = Math.max(black, calculateLuminosity);
    const PartialColor = Math.min(white, blackOrLuminosity);

    const newColor = Math.round(PartialColor);
    const numberToHex = newColor.toString(16);
    const finalHex = `0${numberToHex}`.slice(-2);

    newHex = newHex + finalHex;
  }

  return newHex;
};