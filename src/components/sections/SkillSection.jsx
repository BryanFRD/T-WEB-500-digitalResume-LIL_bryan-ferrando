import SkillDetail from '../SkillDetail';
import SkillIcon from '../icons/SkillIcon';
import SectionTitle from './SectionTitle';
import blazor from '../../assets/skills/blazor.svg'
import csharp from '../../assets/skills/csharp.svg'
import css from '../../assets/skills/css.svg'
import express from '../../assets/skills/express.svg'
import html from '../../assets/skills/html.svg'
import java from '../../assets/skills/java.svg'
import js from '../../assets/skills/js.svg'
import php from '../../assets/skills/php.svg'
import python from '../../assets/skills/python.svg'
import reactjs from '../../assets/skills/reactjs.svg'
import spring from '../../assets/skills/spring.svg'
import symfony from '../../assets/skills/symfony.svg'

const skills = [
  {
    name: 'HTML',
    progress: 5,
    img: html
  },
  {
    name: 'CSS',
    progress: 5,
    img: css
  },
  {
    name: 'JavaScript',
    progress: 5,
    img: js
  },
  {
    name: 'ReactJS',
    progress: 5,
    img: reactjs
  },
  {
    name: 'ExpressJS',
    progress: 5,
    img: express
  },
  {
    name: 'Java',
    progress: 5,
    img: java
  },
  {
    name: 'Springboot',
    progress: 4,
    img: spring
  },
  {
    name: 'Python',
    progress: 4,
    img: python
  },
  {
    name: 'PHP',
    progress: 3,
    img: php
  },
  {
    name: 'Symfony',
    progress: '3',
    img: symfony
  },
  {
    name: 'C#',
    progress: 2,
    img: csharp
  },
  {
    name: 'Blazor',
    progress: 1,
    img: blazor
  }
];

const SkillSection = () => {
  return (
    <div id='skill' className='min-h-screen'>
      <SectionTitle title="Skills">
        <SkillIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-8'>
        {skills.map(skill => <SkillDetail skill={skill} />)}
      </div>
    </div>
  );
};

export default SkillSection;