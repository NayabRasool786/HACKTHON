// requiring mongoose 
const mongoose = require('mongoose');
//creating a variable
const Schema= mongoose.Schema;

// creating teacher schema
const studentSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    department: String,
    
    semester: {
      type: String,
      required: true,
    },
    

    
  });
  

  // creating mongoose model from schema to export
const StudentSch = mongoose.model("StudentSch", studentSchema);

module.exports = StudentSch;


// The error you encountered is likely due to a connection issue with MongoDB.
// The createTeacher function assumes that a connection is already established,
// which may not be the case. Here's a modified version that addresses this:

//const mongoose = require('mongoose');

// // Function to create a new teacher
// const createStudent = async () => {
//   try {
//     // Ensure connection is established before creating a new teacher
//     if (mongoose.connection.readyState !== 1) {
//       await mongoose.connect('mongodb://127.0.0.1:27017/hackthon', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('Connected to MongoDB');
//     }

//     // Create a new teacher document
//     const newStudent = new StudentSch({
//       name: 'Jane Doe',
//       department: 'Computer Science',
//       acedimicBackground: 'PhD in Artificial Intelligence',
//     });

//     // Save the teacher document to the database
//     const savedStudent = await newStudent.save();
//     console.log('New teacher saved:', savedTeacher);
//   } catch (error) {
//     console.error('Error saving teacher:', error);
//   } finally {
//     // Close the connection
//     await mongoose.connection.close();
//   }
// };

// Call the function to create a teacher
createStudent();

// Note: This function should be called from your main application file (e.g., app.js)
// rather than directly in the model file. The connection should be managed in the main file.
