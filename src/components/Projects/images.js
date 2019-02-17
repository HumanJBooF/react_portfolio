const images = [
    {
        image: './assets/img/brakits.PNG',
        name: '[ Brak-its ]',
        tech: ['React', 'CSS', 'Javascript', 'React-Dom', 'Bcrypt', 'Materialize.css', 'Axios', 'Passport.js', 'MySql', 'Sequelize'],
        repo: 'https://github.com/HumanJBooF/brak-its',
        live: 'https://brak-its.herokuapp.com/',
        description: `Tournament Bracket Generator app. Safely sign up with your email, create a username and password. Don't worry your password is encrypted! As a user you can create a tournament or join one.If you create your on you control when you start it, you will also be the only one with access to push the other users to the next round.If you don't have the right amount of users, don't worry BYE weeks will be created at the right spot.Users are seeding based on when they joined the tournament!`
    },
    {
        image: './assets/img/showcase.jpg',
        name: 'Developer Hang out',
        tech: ['Nodejs', 'React', 'Redux', 'Bootstrap', 'Passport', 'Bcrypt', 'MongoDB', 'JSON Web Token', 'dotenv', 'mongoose', 'Axios', 'express'],
        repo: 'https://github.com/HumanJBooF/devconnector',
        live: 'https://developer-hangout.herokuapp.com',
        description: `Social Network app for developers built with React and Redux for state management. Uses passport with bcrypt and jwt token for validation. Join, create a profile, post and comment. More features coming soon.`
    },
    {
        image: './assets/img/code.png',
        name: 'Bamazon',
        tech: ['NodeJS', 'Javascript', 'MySQL', 'SQL', 'NPM Chalk', 'NPM inquirer', 'NPM MySQL', 'NPM dotenv', 'NPM Cli-table-redemption'],
        repo: 'https://github.com/HumanJBooF/bamazon',
        live: null,
        description: `An "Amazon-like" store front for CLI that allows you to choose between a customer, manager or supervisor. Depending on who you are your choices will be different. Products are saved on MySQL.`
    },
    {
        image: './assets/img/const.PNG',
        name: 'Word Guess CLI game',
        tech: ['NodeJS', 'JavaScript', 'NPM inquire', 'NPM chalk', 'NPM figlet'],
        repo: 'https://github.com/HumanJBooF/constructor-word-guess',
        live: null,
        description: 'Hangman for CLI. This uses js constructors and npm inquire.'
    },
    {
        image: './assets/img/front.PNG',
        name: 'Twin Peaks Memory',
        tech: ['React', 'CSS', 'Javascript', 'React-Dom', 'Materialize.css', 'NPM gh-pages'],
        repo: 'https://github.com/HumanJBooF/react-click-game',
        live: 'https://humanjboof.github.io/react-click-game/',
        description: `This app was built using create-react-app, it is a memory style game. There are 12 images, the user starts by clicking on an image, once clicked the images will shuffle, keeping track of how many times you have clicked BUT watch out! If you click the same image twice, YOU LOSE!.`
    },
    {
        image: './assets/img/home.PNG',
        name: 'Eat-Da-Burger',
        tech: ['Nodejs', 'HTML/CSS', 'Javascript', 'Jquery', 'Materialize.css', 'express', 'HandlebarsJS', 'dotenv', 'mysql2', 'sequelize'],
        repo: 'https://github.com/HumanJBooF/sequelizedBurger',
        live: 'https://eat-dat-sequelized-burg.herokuapp.com/burgers',
        description: `This app is an updated version of my eat-da-burgers app, except this time its using sequelize. you can add burgers to the available burgers sections, and devourer burgers by clicking them sending them to the devoured section. Don't like a burger? Click it again in the devoured section to get rid of it for good! The app follows MVC design patterns. Everytime you eat an available burger you send a POST request to the database, allowing it to update for you in real time! Same with clicking a devoured burger!`
    },
    {
        image: './assets/img/main.PNG',
        name: 'Friend Finder',
        tech: ['Nodejs', 'HTML/CSS', 'Javascript', 'Jquery', 'Materialize.css', 'express'],
        repo: 'https://github.com/HumanJBooF/friend-finder',
        live: 'https://human-friend-finder.herokuapp.com/',
        description: `Friend Finder lets the user take a ten question survey. The Questions are from 1 (strongly disagree) to 5 (strongly agree) When the user submits the survey, it will then match you with others who have taken the survey based upon the user with the lowest absolute difference for all ten questions combined. The users data will be stored in the Friends Api, link is at the bottom of the main page and survey.`
    },
    {
        image: './assets/img/parks.PNG',
        name: 'Trivia',
        tech: ['HTML/CSS', 'Javascript', 'Jquery', 'animate.css'],
        repo: 'https://github.com/HumanJBooF/TriviaGame',
        live: 'https://humanjboof.github.io/TriviaGame/',
        description: `This app utilizes setTimeout to make a game timer, Want to play some trivia! Better catch up on your Parks and Rec episodes, because these questions will stump you!`
    },
    {
        image: './assets/img/scrapper.PNG',
        name: 'PC Gamer Mongo-Scrapper',
        tech: ['HTML/CSS', 'Javascript', 'Jquery', 'Nodejs', 'Materialize.css', 'Axios', 'HandlebarsJS', 'MongoDB', 'Mongoose', 'Cheerio'],
        repo: 'https://github.com/HumanJBooF/mongo-scrapper',
        live: 'https://mongo-pcgamer-scraper.herokuapp.com/',
        description: `In this app you can use axios and cheerio to scrape the website pcgamers' news section for all the current articles. You can then save the articles, add notes for each article, unsave the article and delete the note. This is all using MongoDB and Mongoose.`
    },
    {
        image: './assets/img/train1.jpg',
        name: 'Train Scheduler',
        tech: ['HTML/CSS', 'Javascript', 'Jquery', 'Firebase', 'Materialize.css', 'Moment.js', 'Passport.js'],
        repo: 'https://github.com/HumanJBooF/Train-Scheduler',
        live: 'https://humanjboof.github.io/Train-Scheduler/',
        description: `Add a train to my app and watch moment.js calculate when the next will arrive!`
    }
]

export default images;