import { faGlobe, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiGithub, SiJavascript } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";

const ProjectCard = () => {
  return (
    <div className=" rounded-md bg-[#090909] text-center  ">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Patient's Portal
      </div>
      <div className="p-6">
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          With supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div className="flex justify-between border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 ">
        <div className=" flex ">
          <a href="" className=' p-2 hover:bg-[#141414] rounded-md '> <SiGithub className='text-xl' /> </a>
          <a href="" className=' p-2 hover:bg-[#141414] rounded-md '> <BsGlobe className='text-xl' /> </a>
        </div>
        <div className=" flex ">
          <a href="" className=' p-2 hover:bg-[#141414] rounded-md '> <FaNodeJs className='text-xl' /> </a>
          <a href="" className=' p-2 hover:bg-[#141414] rounded-md '> <BiLogoJavascript className='text-xl' /> </a>
          <a href="" className=' p-2 hover:bg-[#141414] rounded-md '> <BiLogoReact className='text-xl' /> </a>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;