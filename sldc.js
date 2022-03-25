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
const planning = "Planning: the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
console.log(planning)
const analysisOfRequirements = "Analysis of Requirements: the process of determining user expectations for a new or modified product."
console.log(analysisOfRequirements)
const design = "Design: the process by which an agent creates a specification of a software artifact intended tko accomplish goals, using a set of primitive components and subject to constraints."
console.log(design)
const implementation = "Implementation: the processes and procedures needed to take software applications and tools from planning and development to the production stage."
console.log(implementation)
const testingAndIntegration = "Testing & Integration: the phase in software testing in which individual software modules are combined and tested as a group."
console.log(testingAndIntegration)
const maintain = "Maintain: is the process of changing, modifying, and updating software to keep up with customer needs"
console.log(maintain)

