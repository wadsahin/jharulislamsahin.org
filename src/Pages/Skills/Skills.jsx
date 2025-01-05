const Skills = () => {
  // Images will save into project folder
  
  return (
    <div>
      <div className="my-10">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <hr className="mt-5 mb-10 w-9/12" />
      </div>
      <div>
        {/* Category 1 */}
        <div className="mb-5" >
          <h2 className="text-3xl font-semibold mb-4">Front-end Skills</h2>
          <div className="flex gap-10 flex-wrap">
            
            <div className="w-40 p-2 text-white border border-lime-500 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">JavaScript</span>
            </div>

            <div className="w-40 p-2 text-white border border-lime-500 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">React</span>
            </div>

            <div className="w-40 p-2 text-white border border-lime-500 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">TailwindCSS</span>
            </div>

          </div>


        </div>
        {/* Category 2 */}
        <div className="my-10" >
          <h2 className="text-3xl font-semibold mb-4">Back-end Skills</h2>
          <div className="flex gap-10 flex-wrap">
            
            <div className="w-40 p-2 text-white border border-indigo-600 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">Node Js</span>
            </div>

            <div className="w-40 p-2 text-white border border-indigo-600 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">Express Js</span>
            </div>

            <div className="w-40 p-2 text-white border border-indigo-600 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=qc3TyHJPxEoH&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">Django</span>
            </div>
          </div>


        </div>
        {/* Category 3 */}
        <div className="mb-5" >
          <h2 className="text-3xl font-semibold mb-4">Authentication & Version Control</h2>
          <div className="flex gap-10 flex-wrap">
            
            <div className="w-40 p-2 text-white border border-orange-400 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">Firebase</span>
            </div>

            <div className="w-40 p-2 text-white border border-orange-400 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">JWT</span>
            </div>

            <div className="w-40 p-2 text-white border border-orange-400 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">Git</span>
            </div>
            <div className="w-40 p-2 text-white border border-orange-400 rounded-xl text-center">
              <img className="mx-auto" src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" />
              <span className="text-2xl font-bold">GitHub</span>
            </div>

          </div>


        </div>



      </div>
    </div>
  );
};

export default Skills;