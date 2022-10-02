import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <div className="contact-div">
          <h1 className="contact-header">Contact</h1>
          <ul className='contact-list'>
            <li className='contact-item'>+1 (202) 290-8201</li>
            <li className='contact-item'>williamhamshar@gmail.com</li>
            <li className='contact-item'><a className='git-link' rel="noreferrer" href='https://nateHamshar.github.io/my-portfolio' target="_blank">nateHamshar.com</a></li>
            <li className='contact-item'><a className="git-link" rel="noreferrer" href='https://github.com/nateHamshar' target="_blank">github.com/nateHamshar</a></li>
          </ul>
        </div>
        <div className="skills-div">
          <h1 className="skills-header">Skills</h1>
          <ul className="skills-list">
            <li className="skill">HTML, CSS, and JS</li>
            <li className="skill">SASS and Bootstrap</li>
            <li className="skill">React JS and Semantic UI</li>
            <li className="skill">Version Control</li>
          </ul>
        </div>
        <div className="education-div">
          <h1 className="education-header">Education</h1>
          <ul className="education-list">
            <li className="edu deg">Associates of Science,</li>
            <li className="edu place">Piedmont Virginia Community College</li>
            <li className="edu date">2020-2021</li>
            <li className="edu deg">Advanced High School Diploma,</li>
            <li className="edu place">Fluvanna County Highschool</li>
            <li className="edu date">2016-2020</li>
            <li className="edu place">Blue Ridge Virtual Governor's School</li>
            <li className="edu date">2016-2020</li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className="gray-header"></div>
        <div className="main-content">
          <div className="work-exp-div">
            <h1 className="work-exp-header">Work Experience</h1>
            <h2 className="job-title">Shift Manager - Raising Cane's Chicken Fingers</h2>
            <ul className="job-list">
              <li className='job-desc'>Communicated goals and expectations to staffmembers, and followed up to ensure standards were being upheld.</li>
              <li className='job-desc'>Contributed to the team by writing extensive daily summaries including all metrics, and weaknesses to track progress.</li>
            </ul>
            <h2 className="job-title">Teaching Internship - Carysbrook Elementary School</h2>
            <ul className="job-list">
              <li className='job-desc'>Practiced math concepts with a group of students that were not grasping the content. </li>
              <li className='job-desc'>Emphasized the importance of using stimulating methods to remember what they were learning.</li>
            </ul>
          </div>
          <div className="projects-div">
            <h1 className="project-title">Relevant Projects</h1>
            <h2 className="project-header">Business Tracking Application</h2>
            <ul className="project-list">
              <li className="project-desc">React application that allows users to submit sales and expenses to record transactions.</li>
              <li className="project-desc">Full stack project that uses Firebase on the back-end to store all inputs. </li>
            </ul>
            <h2 className="project-header">Interactive Money Counting Activity</h2>
            <ul className="project-list">
              <li className="project-desc">Easy-to-use app that prompts the user to select the quantity of each bill or coin to reach a goal.</li>
              <li className="project-desc">React app that relies on user inputs, tracked by states, to reach the expected value.</li>
            </ul>
            <h2 className="project-header">Pokemon Info Website</h2>
            <ul className="project-list">
              <li className="project-desc">Website that displays multiple images and some details about pokemon.</li>
              <li className="project-desc">Uses the public Pokemon API, and Axios to retrieve data about a particular pokemon.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="name-div">
        <h1 className='my-name'>William Hamshar</h1>
        <p className="my-title">Front End Web Developer</p>
      </div>
    </div>
  );
}

export default App;
