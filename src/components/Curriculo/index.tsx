import { Button } from "../Button"
import { Socials } from "../Socials";

type CurriculoProps = {
}

export const Curriculo = ({}: CurriculoProps) => {
  const direct_download = `https://drive.google.com/file/d/153w9DB6ZJfQEN1UICie4cVz3O7-S-s0_/view?usp=sharing`;

  return (
    <a href={direct_download} className="btn btn mt-4 bg-green-on" target="_blank">
      Meu Currículo
      <svg width="40" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download ml-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    </a>
  )
};
