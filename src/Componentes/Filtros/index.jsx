import './style.css'

const Filtros = ({ onChangeOrdenacao }) => {
  const handleSelectChange = (e) => {
    onChangeOrdenacao(e.target.value);
  };

  return (
    <select className='select-filtros' onChange={handleSelectChange}>
        <option value="nenhumFiltro">Nenhum Filtro</option>
      <option value="menorPreco">Menor Preço</option>
      <option value="maiorPreco">Maior Preço</option>
      <option value="tipoCafe">Cafés</option>
      <option value="tipoCappuccino">Cappuccinos</option>
    </select>
  );
};

export default Filtros;
