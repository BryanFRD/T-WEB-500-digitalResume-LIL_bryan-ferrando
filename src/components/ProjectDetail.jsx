import { Link } from 'react-router-dom';
import placeholder from '../assets/project-placeholder.png'

const ProjectDetail = ({project}) => {
  return (
    <div className='group shadow-lg mx-auto rounded-md overflow-hidden max-w-96 max-h-96 bg-backgroundsec border-backgroundsec'>
      <div className='relative'>
        <Link to="https://github.com/BryanFRD" className='group-hover:flex hidden absolute w-full h-full bg-background/90 justify-center items-center'>
          <span>Check project on GitHub</span>
        </Link>
        <h3 className='absolute text-lg bg-background/40 py-1 px-4 shadow-lg rounded-br-lg text-ellipsis'>{project.name}</h3>
        <img className='max-w-96' src={project.img ? project.img : placeholder} alt={`${project.name} image`} />
        <p className='absolute right-0 bottom-0 text-right bg-background/40 py-1 px-2 shadow-lg rounded-tl-lg text-sm'>{project.techno}</p>
      </div>
      <div className='p-3 max-h-28'>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;