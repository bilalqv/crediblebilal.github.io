import React from 'react';
import { SiGeeksforgeeks, SiGithub, SiHackerrank, SiLeetcode } from 'react-icons/si';
import { LiaHackerrank } from 'react-icons/lia';

const About = () => {

  const programmingLanguages = ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript' ];
  const topics = ['Data Structures', 'Algorithms and Optimization', 'Object Oriented Programming', 'Operating Systems',
    'Machine Learning', 'Frontend Development', 'Bckend Development', 'Serverless Architecture', 'Blockchains'];
  const softwares = ['Linux', 'Git', 'React.js', 'Vue.js', 'Node.js', 'Socket.io', 'Express.js', 'Bootstrap', 'MySQL', 'Sequelize',
    'Git', 'Redis', 'Docker', 'AWS SQS', 'AWS Lambda'];


  return (
    <div id="about" className=" min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="max-w-screen-xl mx-auto max-[480px]:p-1   p-4 md:p-8 ">
        <h2 className="text-3xl max-[500px]:text-2xl font-semibold mb-6 text-center">About</h2>

        <div className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-4 justify-evenly max-sm:w-11/12 max-[950px]:w-4/5 mx-auto">


          {/* Education and Coding Profile (Left) */}
          <div className=" flex flex-col space-y-4">
            <div className="bg-[#090909] shadow-lg rounded-lg p-4">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center ">Education</p>
              <hr className='h-px mb-2 bg-gray-500 border-0 ' />

              <p className='flex justify-between italic' > <a href='https://nitsri.ac.in/' target='_blank' className=' p-1 hover:bg-[#141414] rounded-md '>Natinoal Institute of Technology, Srinagar</a> </p>
              <p className='flex justify-between mb-1' > <span className='bg-[#141414] rounded-md px-1 py-1'>B.Tech</span>  <span className='text-center bg-[#141414] rounded-md px-1 py-1'>Computer Science and Engineering</span> </p>
              <p className='flex justify-between mb-1 max-[360px]:text-xs' > <span className='bg-[#141414] rounded-md px-1 py-1'>July'19 - June'23</span> <span className='text-center bg-[#141414] rounded-md px-1 py-1'> CGPA: 8.40 / 10 </span> </p>

              <ul>
                <li className='text-justify'>Studied all the necessary Computer Science Subjects under BTech Program
                  which included Data Structures and Algorithms, Operating Systems, Computer Networks,
                  Database Management System, Network Security, Cloud Computing, Compiler Design, Discrete Mathematics, Machine Learning</li>
              </ul>

            </div>
            <div className="bg-[#090909] shadow-lg rounded-lg p-4">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">Coding Profile</p>
              <hr className='h-px mb-2 bg-gray-500 border-0' />

              <div className="my-2 flex  justify-center space-x-4">
                <a href="https://www.leetcode.com/CredibleBilal" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <SiLeetcode className='text-3xl max-[500px]:text-xl' /> </a>
                <a href="https://www.hackerrank.com/CredibleBilal" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <LiaHackerrank className='text-3xl max-[500px]:text-xl' /> </a>
                <a href="https://auth.geeksforgeeks.org/user/crediblebilal/" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <SiGeeksforgeeks className='text-3xl max-[500px]:text-xl' /> </a>
                <a href="https://www.github.com/crediblebilal" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <SiGithub className='text-3xl max-[500px]:text-xl' /> </a>
              </div>

              <p className='text-justify'>I love solving coding problems and I have solved hundreds pf problems across various coding platforms.</p>
              <p className='flex my-2 mr-4' > <span><a href="https://www.leetcode.com/CredibleBilal" target='_blank'> <SiLeetcode /> </a> </span> <span>: 3-Star, Solved 400+ Problems</span> </p>
              <p className=' flex my-2 mr-4' > <span><a href="https://auth.geeksforgeeks.org/user/crediblebilal/" target='_blank'>  <SiGeeksforgeeks /> </a></span> <span>: Solved 210+ Problems</span> </p>
              <p className=' flex my-2 mr-4' > <span><a href="https://www.hackerrank.com/CredibleBilal" target='_blank'> <LiaHackerrank /> </a></span> <span>: 5-Star in C++ and SQL</span> </p>

            </div>
          </div>

          {/* Skills Portion (Right) */}
          <div className=" p-4 bg-[#090909] shadow-lg rounded-lg ml-4 max-md:ml-0 max-md:mt-4">
            <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">Skills</p>
            <hr className='h-px mb-2 bg-gray-500 border-0 ' />

            <p className="text-xl font-bold mb-0 text-center">Programming Languages</p>
            <hr className='my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">

              {programmingLanguages.map((skill, index) => (
                <p href="#"
                  key={index}
                  className=" bg-[#141414] text-white rounded-lg inline-flex items-center justify-center px-3 py-2 m-1  max-[470px]:px-2 max-[470px]:py-1.5 "
                >
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">{skill}</p>
                </p>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center">Topics</p>
            <hr className='my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">

              {topics.map((skill, index) => (
                <p href="#"
                  key={index}
                  className=" bg-[#141414] text-white rounded-lg inline-flex items-center justify-center px-3 py-2 m-1 max-[470px]:px-2 max-[470px]:py-1.5 "
                >
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">{skill}</p>
                </p>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center">Softwares and Libraries</p>
            <hr className='my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">

              {softwares.map((skill, index) => (
                <p href="#"
                  key={index}
                  className=" bg-[#141414] text-white rounded-lg inline-flex items-center justify-center px-3 py-2 m-1 max-[470px]:px-2 max-[470px]:py-1.5 "
                >
                  <div className="-mt-1 font-sans max-[500px]:text-sm ">{skill}</div>
                </p>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
