import { FaLinkedin } from "react-icons/fa";

const LinkedinCard = () => {
  const linkedInProfileUrl =
    "https://www.linkedin.com/in/VitorMiguelRosaPortela";
  const profileImageSrc = "meprof.png";
  const profileName = "Vitor Miguel Rosa Portela";
  const profileHeadline =
    "Full-stack Junior Developer | React, Typescript, Javascript,  Ruby, Ruby on Rails";

  return (
    <div className=" w-2/3 items-center bg-slate-800 mt-4 flex flex-col p-4 rounded-lg shadow-lg text-white">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Meu LinkedIn:</h1>
      <div className="flex flex-col sm:flex-row bg-slate-900 p-4 rounded-xl items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href={linkedInProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-blue-500 flex items-center justify-center">
            <img
              src={profileImageSrc}
              alt={`${profileName}'s profile picture`}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
        <div className="flex flex-col text-center sm:text-left">
          <a
            href={linkedInProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-semibold hover:underline text-blue-400"
          >
            {profileName}
          </a>
          <p className="text-sm text-gray-400 mt-1">{profileHeadline}</p>
          <a
            href={linkedInProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            See LinkedIn Profile
            <FaLinkedin size={20} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedinCard;
