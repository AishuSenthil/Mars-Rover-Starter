class Rover {
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL'; // Set the mode to NORMAL by default
     this.generatorWatts = 110;
   }
 
   receiveMessage(message) {
     const results = [];
     for (let command of message.commands) {
       let result = this.executeCommand(command);
       results.push(result);
     }
     return {
       message: message.name, // Use message.name to set the message name in the response
       results: results,
     };
   }
 
   executeCommand(command) {
     if (command.commandType === 'MOVE') {
       if (this.mode === 'LOW_POWER') {
         return {completed: false};
       }
       this.position = command.value;
       return {completed: true};
     } else if (command.commandType === 'STATUS_CHECK') {
       return {
         completed: true,
         roverStatus: {
           mode: this.mode,
           generatorWatts: this.generatorWatts,
           position: this.position
         }
       };
     } else if (command.commandType === 'MODE_CHANGE') {
       this.mode = command.value;
       return {completed: true};
     }
   }
 }
 
 module.exports = Rover;
 
