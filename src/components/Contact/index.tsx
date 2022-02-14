import { Button } from "../Button"

type ContactProps = {
}

export const Contact = ({}: ContactProps) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">
            Contato
          </h1> 
          <p className="mb-5">
            Lorem ipsum dolor sit amet. Ad fuga minima cum accusantium ducimus ea ipsa reprehenderit. Eos eveniet voluptatibus et perspiciatis magni et consequatur atque non quis quia. Sed excepturi impedit et laboriosam nemo aut dolorum numquam et autem iste sed totam aliquam sit odio enim!
          </p>
        </div> 
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <select className="select select-bordered select-primary w-full max-w-xs">
                <option disabled="disabled" selected="selected">Choose your superpower</option> 
                <option>telekinesis</option> 
                <option>time travel</option> 
                <option>invisibility</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label> 
              <input placeholder="email" className="input input-bordered" type="text" />
            </div> 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label> 
              <input placeholder="password" className="input input-bordered" type="text" /> 
              <label className="label">
                <a href="#" className="label-text-alt">Forgot password?</a>
              </label>
            </div> 
            <div className="form-control mt-6">
              <input type="button" value="Login" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
