const calcularTaxa = () => {
  const bairro = prompt("Bairro de entrega: ");
  let taxaEntrega;
  switch (bairro) {
    case "Ipanema":
      taxaEntrega = 5.0;
      break;
    case "Alvorada":
    case "São João":
      taxaEntrega = 7.0;
      break;
    case "Aviação":
      taxaEntrega = 10.0;
      break;
    default:
      taxaEntrega = 8.0;
  }
  alert(`A taxa de entrega no seu bairro é ${taxaEntrega.toFixed(2)}`);
};
