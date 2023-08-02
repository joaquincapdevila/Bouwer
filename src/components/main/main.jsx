import "./main.scss";
import Elementos from "./seccions/elementos";
import Historias from "./seccions/historias";
import Inicio from "./seccions/inicio";

const Main = () => {
  return (
    <div className="Main ">
      <Inicio />
      <Elementos />
      <Historias />
    </div>
  );
};
export default Main;
