import SelectorGroup from "../../Selector/SelectorGroup";
import { FaLocationDot } from "react-icons/fa6";
import SelectOption from "../../Selector/SelectorOption";

const cidades = [
  { id: 1, nome: "Brasília" },
  { id: 2, nome: "Santa Catarina" },
  { id: 3, nome: "Foz do Iguaçu" },
  { id: 4, nome: "Gramado" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectOption value="0" label="Escolha sua cidade..." />
        {cidades.map((cidade) => (
          <SelectOption
            key={cidade.id}
            value={cidade.id.toString()}
            label={cidade.nome}
          />
        ))}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
