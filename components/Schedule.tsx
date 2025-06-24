import React from "react";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="w-full bg-white text-black flex flex-col py-10 px-5 md:px-20"
      style={{ minHeight: "384px" }}
    >
      <h1
        className="md:text-5xl text-3xl font-bold underline text-[#CC5F00] relative"
        style={{
          fontFamily: "Akhbar, sans-serif",
          fontWeight: 700,
          lineHeight: "100%",
          textTransform: "capitalize",
          textDecorationStyle: "solid",
        }}
      >
        Schedule & Agenda
      </h1>
      <div className="mt-8 p-6 w-full bg-white text-black">
        <p
          className="text-[25px] font-medium leading-[48px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <strong><li>Paper Submission Opens: 15 March 2025</li></strong> 
          
          <strong><li>Submission Deadline: 5 July 2025 (Due to multiple author requests, the CVMI committee has extended the paper submission till July 5. No further extensions will be granted.)</li></strong>
      
          <strong><li>Acceptance Notification: 15 July 2025</li></strong>
          
          <strong><li>Early Bird Registration: 31 August 2025</li></strong> 
          
          <strong><li>Camera Ready Submission: 15 September 2025</li></strong>
        </p>
      </div>
    </section>
  );
};

export default Schedule;