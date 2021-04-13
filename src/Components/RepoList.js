// this comoponent will be use for both lists (search results and favorites)

import '../Style/RepoList.css';

function RepoList(props) {
  return (
    <div className="list-container">
      {props.repos.map((repo, index) => (
        <div className="repo-card">
          <div className="repo-name">{repo.name}</div>
          <div className="repo-desc">{repo.description}</div>
          <div className="repo-footer">
            <button value="save">save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;