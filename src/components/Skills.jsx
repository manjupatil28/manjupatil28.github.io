import React from 'react';
import './skills.css';
import '../images/react.png'

const Skills = () => {
  return (
    <div className="skills">
    <div className='category-wrapper'>
    <div className='category'>
    <div className='category-title title1'>
      <h2>Programming Languages</h2>
      </div>
      <div className="skill java" title="Java"></div>
      <div className="skill c" title="C"></div>
      <div className="skill cpp" title="C++"></div>
    </div>
    </div>
    <div className='category-wrapper'>
    <div className='category'>
    <div className='category-title title2'>
      <h2>Scripting Languages</h2>
      </div>
      <div className="skill js" title="JavaScript"></div>
      <div className="skill html" title="HTML"></div>
      <div className="skill css" title="CSS"></div>
      <div className="skill sass" title="Sass"></div>
    </div>
    </div>
    <div className='category-wrapper'>
    <div className='category'>
    <div className='category-title title3'>
      <h2>Frameworks</h2>
      </div>
      <div className="skill react" title="React"></div>
      <div className="skill redux" title="Redux"></div>
      <div className="skill mongodb" title="MongoDB"></div>
      <div className="skill express" title="Express.js"></div>
      <div className="skill node" title="Node.js"></div>
    </div>
    </div>
    </div>
  );
};

export default Skills;
