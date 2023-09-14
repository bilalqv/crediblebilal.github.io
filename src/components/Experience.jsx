import ListTick from "./ListTick";

export default function Experience() {
  return (
    <div id="experience" className=" min-h-screen flex flex-col justify-center items-center  bg-black">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl max-[500px]:text-xl font-semibold mb-6 text-center">Experience</h2>

        <div className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-4 justify-evenly max-sm:w-11/12 max-[950px]:w-4/5 mx-auto">
          {/* card 1 */}
          <div className='bg-[#090909] rounded-md p-6  mx-auto'>
            <p className=' font-bold'>Software Engineer Intern</p>
            <p className='flex justify-evenly	' ><a href="https://www.medibuddy.in/" target="_blank" className="bg-[#141414] rounded-md px-2 py-1 hover:bg-[#252525] italic ">MediBuddy</a> <span className="bg-[#141414] rounded-md px-2 py-1 "> Jan'23 - May'23 </span> </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">I worked as a backend developer in the consultation team, mainly working with Node.js and Databases. I worked to build an ideal online consultation flow to improve the customer experience.</span>
              </li>
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">My responsibilities also included optimizing APIs and reducing API latency. I reduced the number of database queries by 50% and decrease API response time by over 70%, bringing it from seconds to milliseconds. Additionally, I consistently worked to improve product quality by addressing bugs and conducting code refactoring.</span>
              </li>
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">I developed an automated system that maintains 100% uptime and raises payment claims for over 10,000 consultations daily, resulting in a significant boost in revenue.</span>
              </li>

            </ul>
          </div>

          {/* card 2 */}

          <div className='bg-[#090909] rounded-md p-6  mx-auto'>
            <p className=' font-bold'>Software Engineer Intern</p>
            <p className='flex justify-evenly	' ><a href="https://www.superbeings.ai/" target="_blank" className="bg-[#141414] rounded-md px-2 py-1 hover:bg-[#252525] italic">SuperBeings</a> <span className="bg-[#141414] rounded-md px-2 py-1 "> Jan'22 - Mar'22 </span> </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">Developed scalable and responsive web pages.</span>
              </li>
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">I worked on the development of a Performance Management System from scratch. I worked side-by- side with designers to implement their masterpieces in HTML, CSS, JavaScript, and Vue.js, making sure the pipeline of experiments never runs dry.</span>
              </li>
              <li className="flex  space-x-3 my-2">
                <ListTick />
                <span className="text-justify">Constantly improving the quality of website by fixing the bugs and refactoring the code base.</span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}