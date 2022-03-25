/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a program that acts as a version control system. It allows for individuals and teams to track changes to code projects, while also preventing bugs and progress loss."
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is a website that allows the local code (git) to be shared/stored remotely online into a repository. Git hub can also be used as a portfolio for future employers, because they can see the projects saved there."
console.log(gitHubDefinition)
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = "git init is a command that initializes / creates a new Git repository."
console.log(gitInitDefinition)

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = `git clone is a command that is used to target an existing repository and create a clone, or copy of the target repository.`
console.log(gitCloneDefinition)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = `git status is a command used for displaying the state of the working directory and the staging area aka tell me about this repo.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = `git add is the command used to add some --or all-- files to be track`
console.log(gitAddDefinition)

let gitAddCode = `the command to add all files is: "git add ."`
console.log(gitAddCode)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = `git commit is a command that creates a snapshot of the files being tracking.`

console.log(gitCommitDefinition)

let gitCommitCode = `git commit -m "initial commit"`
console.log(gitCommitCode)


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = "git push is a command used to connect your local repository content to a remote --GitHub-- repository you've created"