const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (req, res) => {

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
  ]

  res.render('dashboard', { items });
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'Node.js',
    body: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.',
    comments: 4,
  }

  res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Node.js',
      body: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.',
      comments: 4,
    },
    {
      title: 'Aprender Vue.js',
      category: 'Vue.js',
      body: 'Vue.js es un marco progresivo para construir interfaces de usuario.',
      comments: 2,
    },
    {
      title: 'Aprender React.js',
      category: 'React.js',
      body: 'React es una biblioteca de JavaScript para construir interfaces de usuario.',
      comments: 5,
    },
  ]

  res.render('blog', { posts })
})

app.get('/', (req, res) => {
  const user = {
    name: 'John',
    surName: 'Doe',
    age: 25,
  }

  const auth = true

  const approved = false;
  res.render('home', { user: user, auth, approved })
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 🚀')
});