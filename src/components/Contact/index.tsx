import { Button } from "../Button"
import { Form } from "../Form";

type ContactProps = {
}

export const Contact = ({}: ContactProps) => {
  return (
    <div id="contato" className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">
            Contato
          </h1> 
          <p className="mb-5 leading-loose">
            Lorem ipsum dolor sit amet. Ad fuga minima cum accusantium ducimus ea ipsa reprehenderit. Eos eveniet voluptatibus et perspiciatis magni et consequatur atque non quis quia. Sed excepturi impedit et laboriosam nemo aut dolorum numquam et autem iste sed totam aliquam sit odio enim!
          </p>
        </div> 
        <Form />
      </div>
    </div>
  )
};
