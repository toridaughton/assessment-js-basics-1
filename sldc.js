// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

let softwareDevelopmentLifecycle = ["Planning", "Analysis of Requirements", "Design", "Implementation", "Testing & Integration", "Maintain"] 
for(i = 0; i < softwareDevelopmentLifecycle.length; i++){
    console.log(softwareDevelopmentLifecycle[i])
}

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const analysisOfRequirements = "This is the process of determining user expectations for a new or modified product."
const design = "This is the process by which an agent creates a specification of a software artifact intended tko accomplish goals, using a set of primitive components and subject to constraints."
const implementation = "This is the processes and procedures needed to take software applications and tools from planning and development to the production stage."
const testingAndIntegration = "This is the phase in software testing in which individual software modules are combined and tested as a group."
const maintain = "This is the process of changing, modifying, and updating software to keep up with customer needs"
