// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: ' ivanov@mail.com',
      href: 'mailto: ivanov@mail.com',
    },
    phone: {
      text: ' +380671234567',
      href: 'tel:380671234567',
    },
    linkedin: {
      text: ' linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          id: 18964,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          id: 45754,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 10,
          id: 37942,
          isTop: true,
        },
        {
          name: 'Git',
          point: 7,
          id: 91752,
        },
        {
          name: 'Terminal',
          point: 8,
          id: 64782,
        },
        { name: 'NPM', point: 8, id: 45792 },
        {
          name: 'React.js',
          point: 0,
          id: 64482,
        },
        {
          name: 'PHP',
          point: null,
          id: 64482,
        },
      ],
      hobbies: [
        { name: 'sport', isMain: true },
        { name: 'music', isMain: false },
        { name: 'programming', isMain: true },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        { name: 'ДУТ', isEnd: true },
        { name: 'NetAcademy', isEnd: true },
        { name: 'IT-Brains', isEnd: false },
      ],
      certificates: [
        { name: 'Сертифікат 1', id: 145987 },
        { name: 'Сертифікат 2', id: 175394 },
        { name: 'Сертифікат 3', id: 674238 },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior fullstack developer',
          company: {
            name: 'IT-Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Information about project',
              stackAmount: 3,
              awardAmount: 2,

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Text about awards',
                },
                {
                  name: 'Text about awards 2',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
