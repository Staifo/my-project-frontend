import React from "react";

export const AboutThisProject = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "justify",
        marginTop: "20px",
      }}
    >
      <div style={{ fontSize: "20px", fontFamily: "Quicksand", width: "60%" }}>
        This project was created by me in individual work in around 2 weeks. The
        idea for my final project was to create a platform just for Junior
        Coders, where they can present themselves and their skills via short
        video, CV and other sources to prospective employers and furthermore to
        give employers an opportunity to just look for Junior Coders to give
        them a better chance to find a way into the industry. Videos can be
        recorded directly on this platform during the registration process via
        build in component with access to the local webcam. Once you go through
        the registration process a new user card and the appropriate personal
        space is created automatically. The current videos are improvised. The
        persons in the videos are fellow students. I used ReactJS, NodeJS,
        Express, Material UI, Bootstrap, MongoDB ... to create this project and
        work is still going on. On iOS: Videos dont't play on iOS since the
        videos are recorded and saved in WebM format.
      </div>
    </div>
  );
};

export default AboutThisProject;
