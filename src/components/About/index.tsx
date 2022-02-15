import { Button } from "../Button"

type AboutProps = {
}

export const About = ({}: AboutProps) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="mb-5 text-5xl font-bold">
            SOBRE
          </h2> 
          <p className="mb-5">
            Lorem ipsum dolor sit amet. Ad fuga minima cum accusantium ducimus ea ipsa reprehenderit. Eos eveniet voluptatibus et perspiciatis magni et consequatur atque non quis quia. Sed excepturi impedit et laboriosam nemo aut dolorum numquam et autem iste sed totam aliquam sit odio enim!
          </p>
        </div> 
        <div>COLUNA 2</div>
      </div>
    </div>
  )
};
