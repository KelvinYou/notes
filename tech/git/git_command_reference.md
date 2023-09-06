# Git Command Reference

| Task                                   | Command                                     |
|----------------------------------------|---------------------------------------------|
| **Common Commands**                    |                                             |
| Add changes to staging                 | `git add .`                                 |
| Commit changes                         | `git commit -m "Update"`                    |
| Pull code from a branch                | `git pull origin master`                   |
| Push code to a branch                  | `git push origin master`                   |
| **Branch Commands**                    |                                             |
| List branches                          | `git branch`                               |
| Create a new branch                    | `git branch <new-branch-name>`             |
| Switch to a branch                     | `git checkout <branch-name>`               |
| Delete a branch                        | `git branch -d <branch-name>`              |
| **Merging Branches**                   |                                             |
| Merge a branch into another branch     | `git merge <source-branch>`                |
| Commit it                              | `git commit -m "Merge feature-branch into main"`                |
| **Creating and Pushing a New Branch Based on Release** |                               |
| Fetch origin                           | `git fetch origin`                         |
| Create new feature branch              | `git checkout -b new-feature-branch origin/release` |
| Push feature branch                    | `git push origin new-feature-branch`      |
| **Creating and Pushing a Daily Branch Based on Release** |                            |
| Create and switch to daily branch       | `git checkout -b daily-<date>-gr origin/release` |
| Push daily branch                      | `git push origin daily-<date>-gr`          |
| **Code Library**                       |                                             |
| Delete a remote branch                 | `git push origin --delete <branch-name>`  |
| **Submodule Commands**                 |                                             |
| Initialize submodules                  | `git submodule init`                      |
| Update submodules                      | `git submodule update`                    |
