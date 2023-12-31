const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create users with different user settings
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      name: 'User One',
      photo: 'boy1.png',
      bio: 'Bio for User One',
      emailVerified: true,
      email: 'user1@example.com',
      password: 'password1',
      settings: {
        create: {
          publicProfile: true,
          publicEmail: false,
          userId: 1,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      name: 'User Two',
      photo: 'girl1.png',
      bio: 'Bio for User Two',
      email: 'user2@example.com',
      password: 'password2',
      settings: {
        create: {
          publicProfile: true,
          publicEmail: false,
          userId: 2,
        },
      },
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: 'user3',
      name: 'User Three',
      photo: 'girl2.png',
      bio: 'Bio for User Three',
      email: 'user3@example.com',
      password: 'password3',
      settings: {
        create: {
          publicProfile: false,
          publicEmail: false,
          userId: 3,
        },
      },
    },
  });

  // Create courses with subtopics and modules
  const course1 = await prisma.course.create({
    data: {
      name: 'Course 1',
      description: 'Description for Course 1',
      tags: ['tag1', 'tag2'],
      image: 'image.jpg',
      subtopics: {
        create: [
          {
            name: 'Subtopic 1.1',
            image: 'image1.jpg',
            description: 'Description for Subtopic 1.1',
            modules: {
              create: [
                {
                  name: 'Module 1.1.1',
                  type: 'text',
                  content: ['Content for Module 1.1.1'],
                  image: 'image1.jpg',
                },
                {
                  name: 'Module 2.1.2',
                  type: 'quiz',
                  image: 'image6.jpg',
                  quiz: {
                    create: {
                      Question: 'Question 2',
                      Answer: ['Answer 1', 'Answer 2'],
                      Options: ['Option 1', 'Option 2', 'Option 3'],
                      image: 'quiz_image2.jpg',
                    },
                  },
                },
              ],
            },
          },
          {
            name: 'Subtopic 1.2',
            description: 'Description for Subtopic 1.2',
            image: 'image1.jpg',
            modules: {
              create: [
                {
                  name: 'Module 1.2.1',
                  type: 'text',
                  content: ['Content for Module 1.2.1'],
                  image: 'image3.jpg',
                },
                {
                  name: 'Module 1.2.2',
                  type: 'video',
                  video: 'video1.mp4',
                  image: 'image4.jpg',
                },
              ],
            },
          },
        ],
      },
    },
  });

  const course2 = await prisma.course.create({
    data: {
      name: 'Course 2',
      description: 'Description for Course 2',
      tags: ['tag3', 'tag4'],
      image: 'image.jpg',
      subtopics: {
        create: [
          {
            name: 'Subtopic 2.1',
            description: 'Description for Subtopic 2.1',
            image: 'image1.jpg',
            modules: {
              create: [
                {
                  name: 'Module 2.1.1',
                  type: 'text',
                  content: ['Content for Module 2.1.1'],
                  image: 'image5.jpg',
                },
                {
                  name: 'Module 1.1.2',
                  type: 'quiz',
                  image: 'image2.jpg',
                  quiz: {
                    create: {
                      Question: 'Question 1',
                      Answer: ['Answer 1', 'Answer 2'],
                      Options: ['Option 1', 'Option 2', 'Option 3'],
                      image: 'quiz_image1.jpg',
                    },
                  },
                },
              ],
            },
          },
          {
            id: 4,
            name: 'Subtopic 2.2',
            description: 'Description for Subtopic 2.2',

            image: 'image1.jpg',
            modules: {
              create: [
                {
                  name: 'Module 2.2.1',
                  type: 'text',

                  content: ['Content for Module 2.2.1'],
                  image: 'image7.jpg',
                },
                {
                  name: 'Module 2.2.2',
                  type: 'video',

                  video: 'video2.mp4',
                  image: 'image8.jpg',
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: user1.id,
      courseId: course1.id,
      status: 'COMPLETED',
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: user3.id,
      courseId: course1.id,
      status: 'COMPLETED',
    },
  });


  await prisma.courseEnrollment.create({
    data: {
      userId: user1.id,
      courseId: course2.id,
      status: 'IN_PROGRESS',
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: user2.id,
      courseId: course1.id,
      status: 'COMPLETED',
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: user2.id,
      courseId: course2.id,
      status: 'IN_PROGRESS',
    },
  });

  const achievement1 = await prisma.achievement.create({
    data: {
      name: 'Achievement 1',
      icon: 'icon1.jpg',
      description: 'Description for Achievement 1',
      courseId: 1,
      userId: 1,
    },
  });

  const achievement3 = await prisma.achievement.create({
    data: {
      name: 'Achievement 3',
      icon: 'icon3.jpg',
      description: 'Description for Achievement 3',
      courseId: course1.id,
      userId: user3.id,
    },
  });

  const achievement2 = await prisma.achievement.create({
    data: {
      name: 'Achievement 2',
      icon: 'icon2.jpg',
      description: 'Description for Achievement 2',
      courseId: 2,
      userId: 2,
    },
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
