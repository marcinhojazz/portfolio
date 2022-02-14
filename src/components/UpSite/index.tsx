type UpSiteProps = {}

export const UpSite = ({}: UpSiteProps) => {
  return (
    <div className="text-primary flex fixed bottom-0 right-0 pr-10 pb-20">
      <a href="#nav" className=" border-2 hover:text-secondary rounded-full p-1 text-4xl">
        up<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      </a>
    </div>
  )
}