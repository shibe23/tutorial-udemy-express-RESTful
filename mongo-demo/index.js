const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err))

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
  });

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['Angular', 'frontend'],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses(){
  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .find({ price: 10 })
    .find({ price: { $gte: 10, $lte: 20 } })
    .find({ price: { $in: [10, 15, 20] } })
    .limit(10)
    .sort({ name: 1, tags: 1 }); // 1: ascending order -1: desending order
  console.log(courses);
}

getCourses();