const GithubCard = () => {
  const githubProfileUrl = "https://github.com/VitorMiguelRosa";
  const profileImageSrc = "meprof.png";
  const profileName = "Vitor Miguel Rosa Portela";
  const profileHeadline =
    "Full-stack Junior Developer | React, Typescript, Javascript, Ruby, Ruby on Rails";

  return (
    <div className="items-center w-2/3 bg-gray-800 mt-4 flex flex-col p-4 rounded-lg shadow-lg text-white">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Meu GitHub:</h1>
      <div className="flex flex-col sm:flex-row bg-gray-900 p-4 rounded-xl items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-purple-500 flex items-center justify-center">
            {" "}
            <img
              src={profileImageSrc}
              alt={`${profileName}'s profile picture`}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
        <div className="flex flex-col text-center sm:text-left">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-semibold hover:underline text-purple-400"
          >
            {profileName}
          </a>
          <p className="text-sm text-gray-400 mt-1">{profileHeadline}</p>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            See GitHub Profile
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.77.422-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399 1.02.0 2.046.133 3.003.399 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
