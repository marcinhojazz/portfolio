import { Button } from "../Button"
import { JoinMetaverse } from "../JoinMetaverse"
import { LinkNav } from "./styles"

type NavProps = {}

export const Nav = ({}: NavProps) => {
  return (
    <div id="nav" className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          PORTFÓLIO
        </span>
      </div> 
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <JoinMetaverse />
        <div className="flex items-stretch btn-group" >
          <a className="btn btn-sm rounded-btn" href="/">
            Home
          </a> 
          {/* <a href="#contato" className="btn btn-ghost btn-sm rounded-btn">
            Contato
          </a> */}
        </div>
      </div>
      <button className="btn btn-square btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
      </button>
    </div>
  )
}