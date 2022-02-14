import { Button } from "../Button"

type HeroProps = {
}

export const Hero = ({}: HeroProps) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src="./hero-image.svg" className="max-w-md rounded-lg shadow-2xl" /> 
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Márcio Machado Pontes
          </h1> 
          <p className="mb-5">
          Desenvolvedor front-end, localizada No Rio de Janeiro, Brasil. Em busca da minha primeira oportunidade na area de desenvolvimento web.
          </p>
          <a href="https://api.whatsapp.com/send?phone=5521993233208">
            <Button className='p-2'>
              Contato
              <svg id="whatsapp" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path id="Caminho_1" data-name="Caminho 1" d="M15,30A15,15,0,1,0,0,15,15,15,0,0,0,15,30Z" fill="#25d366"/>
                <path id="Caminho_2" data-name="Caminho 2" d="M19.394,26.645h0a8.912,8.912,0,0,1-4.262-1.086L10.4,26.8l1.265-4.622a8.92,8.92,0,1,1,7.729,4.467Zm-4.047-2.7.271.161a7.4,7.4,0,0,0,3.773,1.033h0a7.414,7.414,0,1,0-6.28-3.474l.176.281-.749,2.736Zm8.235-4.3a.721.721,0,0,1,.305.2,1.864,1.864,0,0,1-.13,1.06,2.3,2.3,0,0,1-1.5,1.06,3.055,3.055,0,0,1-1.4-.088,12.791,12.791,0,0,1-1.271-.47,9.818,9.818,0,0,1-3.768-3.31l-.039-.055,0,0a4.33,4.33,0,0,1-.908-2.3,2.468,2.468,0,0,1,.736-1.812l.044-.047a.819.819,0,0,1,.594-.279c.149,0,.3,0,.427.008h.05c.13,0,.292,0,.452.382.061.148.151.367.246.6.192.467.4.983.441,1.057a.41.41,0,0,1,.019.39l-.031.063a1.266,1.266,0,0,1-.192.308c-.037.043-.076.09-.114.137-.077.093-.153.187-.22.253-.112.111-.228.232-.1.455a6.717,6.717,0,0,0,1.24,1.544,5.758,5.758,0,0,0,1.645,1.04c.061.027.111.048.147.066.223.112.353.093.483-.056s.557-.651.706-.874.3-.186.5-.112,1.3.614,1.523.725Z" transform="translate(-3.9 -3.3)" fill="#fdfdfd" fill-rule="evenodd"/>
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
};
