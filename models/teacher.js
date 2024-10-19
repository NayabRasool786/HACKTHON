// requiring mongoose 
const mongoose = require('mongoose');
//creating a variable
const Schema= mongoose.Schema;

// creating teacher schema
const teacherSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    department: String,
    
    acedimicBackground: {
      type: String,
      required: true,
    },
    subject: {
        type: String,
        required: true,
      },
    
      experience: {
        type: Number,
        required: true,
      },
      projects: {
        type: String,
        required: true,
      },
    
  });
  

  // creating mongoose model from schema to export
const TeacherSch = mongoose.model("TeacherSch", teacherSchema);

module.exports = TeacherSch;


// The error you encountered is likely due to a connection issue with MongoDB.
// The createTeacher function assumes that a connection is already established,
// which may not be the case. Here's a modified version that addresses this:

//const mongoose = require('mongoose');

// Function to create a new teacher
const createTeacher = async () => {
  try {
    // Ensure connection is established before creating a new teacher
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect('mongodb://127.0.0.1:27017/hackthon', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }

    // Create a new teacher document
    const newTeacher = new TeacherSch({
      name: 'Jane Doe',
      department: 'Computer Science',
      acedimicBackground: 'PhD in Artificial Intelligence',
      subject: 'AI and Machine Learning',
      experience: 5,
      projects: 'AI and Machine Learning',
    });

    // Save the teacher document to the database
    const savedTeacher = await newTeacher.save();
    console.log('New teacher saved:', savedTeacher);
  } catch (error) {
    console.error('Error saving teacher:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
  }
};

// Call the function to create a teacher
createTeacher();

// Note: This function should be called from your main application file (e.g., app.js)
// rather than directly in the model file. The connection should be managed in the main file.
