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
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 3H4C2.34 3 1 4.34 1 6v12c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zM9 18H6v-6h3v6zm-1.5-7.5c-.83 0-1.5-.67-1.5-1.5S6.67 7.5 7.5 7.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10.5 7.5h-3v-4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V18h-3v-6h3v1.5c.83-.83 1.5-1.5 1.5-1.5s.67-.67 1.5-.67c1.66 0 3 1.34 3 3V18z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedinCard;
