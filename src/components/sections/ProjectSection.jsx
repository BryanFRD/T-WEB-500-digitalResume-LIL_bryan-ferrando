import ProjectDetail from '../ProjectDetail';
import ProjectIcon from '../icons/ProjectIcon';
import SectionTitle from './SectionTitle';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'small description',
    techno: 'HTML, SCSS, JS',
    img: ''
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'small description',
    techno: 'NodeJS, Express, Sequelize, GraphQL',
    img: ''
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt totam nam expedita beatae. Delectus incidunt blanditiis odit, distinctio ab voluptatum officiis mollitia, architecto, aut rerum hic debitis quas. Corrupti, id. Asperiores adipisci quod incidunt, nobis dignissimos iste quia odit perferendis eius facilis, suscipit error eaque neque laudantium mollitia ipsam voluptate praesentium nam enim soluta ipsa, tempore animi. Recusandae, modi ratione!',
    techno: 'ReactJS, TailwindCSS',
    img: ''
  }
]

const ProjectSection = () => {
  return (
    <div id='project' className='min-h-screen'>
      <SectionTitle title='Projects'>
        <ProjectIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {projects.map(project => <ProjectDetail key={project.id} project={project}/>)}
      </div>
    </div>
  );
};

export default ProjectSection;