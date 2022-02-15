import { Button } from "../Button"

type FormProps = {
}

export const Form = ({}: FormProps) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
  )
};
