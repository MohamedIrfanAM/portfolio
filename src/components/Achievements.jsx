const Details = ({title,conductor,discription}) => {
  return(
    <div className="px-2 pt-2 ml-2 mt-1">
      <h1 className="text-lg font-semibold text-primary underline">{title}</h1>
      <h2 className="text-secondary font-semibold">{conductor}</h2>
      <h2 className="text-secondary max-w-[400px]">{discription}</h2>
    </div>
  )
}

const Achievements  = () => {
  return (
    <div>
      <Details title="First Prize in Mazerunner competition" conductor={"Hestia 2023,TKM collge of Engineering"} discription={"Build an autonomouse maze solving robot which works on the principle of DFS"} />
      <Details title="Second Prize in Sonorous Hackathon" conductor={"IEDC CET"} discription={"Developed a web-camera controlled mouse system that can effectively serve as a replacement for the traditional computer mouse for individuals with limited use of their forelimbs."} />
    </div>
  )
}

export default Achievements 