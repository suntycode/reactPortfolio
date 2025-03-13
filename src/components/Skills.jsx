import React from "react";
import { GoDotFill } from "react-icons/go";

const Skills = () => {
  return (
    <div className="w-full text-white flex justify-center  bg-black ">
     <div className=" flex justify-center flex-col w-full  max-w-[1080px]">
     <div>
     <div className=" w-[1057px] h-16 border-r-2  border-white mb-3"></div>
     <div className=" flex items-center justify-end gap-5">
     <p className=" text-5xl font-semibold  text-right">Skills </p>
     <GoDotFill className=" bg-black  border-2 p-2 text-5xl rounded-full text-white"/>
    
     </div>
     </div>
     <div className="grid lg:grid-cols-5 justify-items-center items-end self-end gap-10 min-h-screen mb-20">
     <section className="text-center text-[25rem] font-semibold leading-none border-b-2 border-white">
       S
     </section>
     <div className=" lg:col-span-4 flex  items-start gap-10 mb-10">
     <section className=" text-center lg:text-left">
     I'm a paragraph. Click here to add your own text and edit
     me. It’s easy. Just click “Edit Text” or double-click me to add your
     own content and make changes to the font. Feel free to drag and drop
     me anywhere you like on your page. I’m a great place for you to tell a
     story and let your users know a little more about you.
      </section>
      <section className=" text-center lg:text-left">
        I'm a paragraph. Click here to add your own text and edit
        me. It’s easy. Just click “Edit Text” or double-click me to add your
        own content and make changes to the font. Feel free to drag and drop
        me anywhere you like on your page. I’m a great place for you to tell a
        story and let your users know a little more about you.
      </section>
     </div>
   
   </div>
   
     </div>
    </div>
  );
};

export default Skills;
