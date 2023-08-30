import React from 'react';

const Resume = () => {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "APIs",
    "Node.js",
    "Express.js",
    "MongoDB/Mongoose",
    "MySQL",
    "GraphQL",
  ];

  return (
    <div className="KSAs">
      {/* link to the resume */}
      <p>
        View Resume{" "}
        <a
          href="https://docs.google.com/document/d/1AKBSZexkPM0IovnTwpPRrE0sDQv29wR3/edit?usp=sharing&ouid=104626244226145441295&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>{" "}
        on Google Drive
      </p>
      <div className="d-flex mt-3 row">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <h3 className="lessons">Front-End/Back-End Learning Languages</h3>
          <ul className="list-group list-group-flush">
            {languages.map((item) => (
              <li className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
