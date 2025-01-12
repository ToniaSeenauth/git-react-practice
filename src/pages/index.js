import React from "react"
//import ReactDOM from 'react-dom';


import { Practiceheader } from "../components/Header";

const IndexPage = () => (
  <div>
<Practiceheader />

    <p>git init // creates a repo locally</p>
    <p>git add . // adds all of your changes to the git repo</p>
    <p>git add FileName.txt // adds the file specified to your git repo instead of using “git add .” to add all of them.</p>
    <p>git commit -m “short comment about changes here” // commits your changes to the repository</p>
    <p>git status // red files mean they haven’t been added to your changes to be committed, green means they’re added but not committed, if everything has been committed, it will say something like “nothing to commit” in white</p>
    <p>git push // pushes the changes from your current branch to the matching branch in your remote repo (like GitHub). If there’s not a matching branch, terminal will give you a line to copy/paste to create it</p>
    <h4>In git, your master branch is your main branch. It should be a working copy of your code. You should create a new branch when you want to make changes. Call the branch something that indicates what you’re working on. (Name it using _ or -, not camelCase)</h4>
    <p>git checkout -b new-branch-name // this creates the branch and switches you to it</p>
    <p>git branch // will show you which branch you’re on</p>
    <p>git checkout branch-name // ex. git checkout master will switch you to a different branch, (master, in this example)</p>
    <p>git merge branch-name // merges branch_name into the branch you’re on</p>
    <p>git branch -d branch-name // deletes the branch</p>
    <h4>When you create a repository in GitHub, it will give you code to paste in Terminal so you can set your remote. change directory (cd) to the directory on your computer (ex. cd Documents/ProjectFolder)</h4>
    <p>git remote add origin https://github.com/your-github-project-here // get this line from GitHub</p>
    <p>git push -u origin master // pushes your master to GitHub. You should be able to refresh GitHub and see your files</p>
    <h4>When you want to get your repo from GitHub</h4>
    <p>git fetch // gets the change data from the remote branch but doesn’t change your files</p>
    <p>git pull // merges remote changes into your local files</p>
  </div>
)

export default IndexPage
