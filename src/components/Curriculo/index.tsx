import { Button } from "../Button"
import { Socials } from "../Socials";

type CurriculoProps = {
}

export const Curriculo = ({}: CurriculoProps) => {

  const direct_download = `https://www.linkedin.com/ambry/?x-li-ambry-ep=AQLwcUxNSVK1KgAAAX8ix9WwJhrZp8yif_ydnqhXD2msbEBUDqmMhfbgiYswqVBpZzBRH7m8P23ORzrviqGVkN4Ke0OPik2TMo0AyqQtWverguIQUmGqXNEzHTGWDfmu_CcoUOJUZi8MTH3MhqnGBCkhhUCKh9lupsrZDr1TjxWV8GU0YVAa9zJzqdes5gbiQxdEOLcmMbyLgiX4wtloPneR6L18rUkIaO6o7SZtGzsaY8RnPPsBRZ-UBlXHDD4_dqCrSSL7cQjeAZyhEHZh3V80zlnrNDchk41aWLDtaue-IJFTCbT8-4PNCSTjVARx5UcrlL6StD46NYI7Gf-MFaWhE2esd0NZwluQUL6NFzbL7DNpljC5Av3-Pj2SpmfekZiwALZ2hJYMDdezGis7-CSVcVSr7eDvKKo2jHj7OGtbMIfqzznEN2NDoXncQjbHSI-nTKTg6hFz1W8Qe7hm50G8I9Hw7n38KpoEeby1CcNAcpp4kjGn0bBmpcTSck93cd7GoQfY0B5AytNvck6K4HlN5zT5xUBL0j6822QNPgpwYRj8ZUN9eG1KpcxDxROdNcLBLw`;
  return (
    <a href={direct_download} className="btn btn mt-4 bg-green-on">
      Meu Currículo
      <svg width="40" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download ml-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    </a>
  )
};
