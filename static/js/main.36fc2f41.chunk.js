(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){e.exports=a(303)},166:function(e,t,a){},301:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(39),i=a.n(r),s=a(317),c=a(309),l=a(321),m=a(305),u=(a(166),a(40)),d=a(41),p=a(43),h=a(42),g=a(44),b={fixedMenu:{boxShadow:"0px 10px 5px rgba(0, 0, 0, 0.8)",background:"rgb(51,73,69)"},menu:{border:"none",borderRadius:0,boxShadow:"none",marginBottom:"1em",marginTop:"4em",transition:"box-shadow 0.2s ease, padding 0.2s ease",background:"rgb(51,73,69)"},header:{paddingTop:"2em"},back:{background:"url(./assets/img/jscode.png)"}},y=a(139),v=a.n(y),f={box:{border:"1pt solid rgb(147,113,67)",height:"200px",borderTop:"15pt solid rgb(147,113,67)",padding:"10px",fontSize:"20px",color:"white",background:"black"},text:{marginBottom:"0px",fontSize:"15px"}},w=a(135),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){var e={strings:a.props.strings,typeSpeed:100,smartBackspace:!0,loop:!0,cursorChar:"_"};a.typed=new v.a(a.type,e)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,{style:f.box},o.a.createElement("p",{style:f.text},"Joshua@Joshua-PC ~"),o.a.createElement(w.a,{inverted:!0,name:"dollar sign"}),o.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.type=t}}))}}]),t}(o.a.Component),k=a(314),x=a(316),S=a(307),M=a(308),j=a(306),C=a(322),T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={menuFixed:!1,string:["npm install^1000\n`installing developer...`^1000\n`I am a <strong>Full stack developer</strong>`","I love working with: Node","I love working with: Express","I love working with: React","I love working with: MongoDb","I love learning","I love being challenged","Come check out my work!"],items:[["Home","/react_portfolio/"],["Tech","/react_portfolio/tech"],["Projects","/react_portfolio/projects"],["Contact","/react_portfolio/contact"]]},a.stickTopMenu=function(){return a.setState({menuFixed:!0})},a.unStickTopMenu=function(){return a.setState({menuFixed:!1})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.menuFixed,a=e.items,n=e.string,r=this.props.location.pathname,i=b.back,s=b.header,c=b.fixedMenu,l=b.menu,u=[];return a.map(function(e,t){console.log(e);var n=a[t][0],i=a[t][1];u.push(o.a.createElement(k.a.Item,{key:"item-".concat(t),index:t,as:j.a,to:i,active:i===r},n))}),o.a.createElement(m.a,{fluid:!0,style:i},o.a.createElement(m.a,null,o.a.createElement(x.a,{textAlign:"center",size:"huge",content:"Welcome",inverted:!0,style:s}),o.a.createElement(S.a,{hidden:!0}),o.a.createElement(E,{strings:n})),o.a.createElement(M.a,{onTopPassed:this.stickTopMenu,onBottomPassedReverse:this.unStickTopMenu,once:!1},o.a.createElement(k.a,{pointing:!0,inverted:!0,widths:5,size:"tiny",fixed:t?"top":void 0,style:t?c:l},u)))}}]),t}(o.a.Component),J=Object(C.a)(T),N=a(320),z=a(312),I=a(310),P=a(313),B=a(311),H=a(319),q=[{image:"./assets/img/brakits.PNG",name:"[ Brak-its ]",tech:["React","CSS","Javascript","React-Dom","Bcrypt","Materialize.css","Axios","Passport.js","MySql","Sequelize"],repo:"https://github.com/HumanJBooF/brak-its",live:"https://brak-its.herokuapp.com/",description:"Tournament Bracket Generator app. Safely sign up with your email, create a username and password. Don't worry your password is encrypted! As a user you can create a tournament or join one.If you create your on you control when you start it, you will also be the only one with access to push the other users to the next round.If you don't have the right amount of users, don't worry BYE weeks will be created at the right spot.Users are seeding based on when they joined the tournament!"},{image:"./assets/img/code.png",name:"Bamazon",tech:["NodeJS","Javascript","MySQL","SQL","NPM Chalk","NPM inquirer","NPM MySQL","NPM dotenv","NPM Cli-table-redemption"],repo:"https://github.com/HumanJBooF/bamazon",live:null,description:'An "Amazon-like" store front for CLI that allows you to choose between a customer, manager or supervisor. Depending on who you are your choices will be different. Products are saved on MySQL.'},{image:"./assets/img/const.PNG",name:"Word Guess CLI game",tech:["NodeJS","JavaScript","NPM inquire","NPM chalk","NPM figlet"],repo:"https://github.com/HumanJBooF/constructor-word-guess",live:null,description:"Hangman for CLI. This uses js constructors and npm inquire."},{image:"./assets/img/front.PNG",name:"Twin Peaks Memory",tech:["React","CSS","Javascript","React-Dom","Materialize.css","NPM gh-pages"],repo:"https://github.com/HumanJBooF/react-click-game",live:"https://humanjboof.github.io/react-click-game/",description:"This app was built using create-react-app, it is a memory style game. There are 12 images, the user starts by clicking on an image, once clicked the images will shuffle, keeping track of how many times you have clicked BUT watch out! If you click the same image twice, YOU LOSE!."},{image:"./assets/img/home.PNG",name:"Eat-Da-Burger",tech:["Nodejs","HTML/CSS","Javascript","Jquery","Materialize.css","express","HandlebarsJS","dotenv","mysql2","sequelize"],repo:"https://github.com/HumanJBooF/sequelizedBurger",live:"https://eat-dat-sequelized-burg.herokuapp.com/burgers",description:"This app is an updated version of my eat-da-burgers app, except this time its using sequelize. you can add burgers to the available burgers sections, and devourer burgers by clicking them sending them to the devoured section. Don't like a burger? Click it again in the devoured section to get rid of it for good! The app follows MVC design patterns. Everytime you eat an available burger you send a POST request to the database, allowing it to update for you in real time! Same with clicking a devoured burger!"},{image:"./assets/img/main.PNG",name:"Friend Finder",tech:["Nodejs","HTML/CSS","Javascript","Jquery","Materialize.css","express"],repo:"https://github.com/HumanJBooF/friend-finder",live:"https://human-friend-finder.herokuapp.com/",description:"Friend Finder lets the user take a ten question survey. The Questions are from 1 (strongly disagree) to 5 (strongly agree) When the user submits the survey, it will then match you with others who have taken the survey based upon the user with the lowest absolute difference for all ten questions combined. The users data will be stored in the Friends Api, link is at the bottom of the main page and survey."},{image:"./assets/img/parks.PNG",name:"Trivia",tech:["HTML/CSS","Javascript","Jquery","animate.css"],repo:"https://github.com/HumanJBooF/TriviaGame",live:"https://humanjboof.github.io/TriviaGame/",description:"This app utilizes setTimeout to make a game timer, Want to play some trivia! Better catch up on your Parks and Rec episodes, because these questions will stump you!"},{image:"./assets/img/scrapper.PNG",name:"PC Gamer Mongo-Scrapper",tech:["HTML/CSS","Javascript","Jquery","Nodejs","Materialize.css","Axios","HandlebarsJS","MongoDB","Mongoose","Cheerio"],repo:"https://github.com/HumanJBooF/mongo-scrapper",live:"https://mongo-pcgamer-scraper.herokuapp.com/",description:"In this app you can use axios and cheerio to scrape the website pcgamers' news section for all the current articles. You can then save the articles, add notes for each article, unsave the article and delete the note. This is all using MongoDB and Mongoose."},{image:"./assets/img/search.PNG",name:"PodSpot",tech:["Nodejs","HTML/CSS","Javascript","Jquery","HandlebarsJS","Materialize.css","mysql2","Passport.js","dotenv","Sequelize","podcast-search","socket-io","morgan"],repo:"https://github.com/HumanJBooF/podspot",live:"https://the-podspot.herokuapp.com/",description:"Do you like podcast? Do you want to connect with others? Do you want to know what others think about certain podcast? Well you have come to the right spot! This app allows users to search any podcast by name, episode or keywords! Get back a list! click and open up! You will see a description, the title and a link to to episode! If there are reviews already you will see those to! You can leave your own review to and have it save to your username!"},{image:"./assets/img/train1.jpg",name:"Train Scheduler",tech:["HTML/CSS","Javascript","Jquery","Firebase","Materialize.css","Moment.js","Passport.js"],repo:"https://github.com/HumanJBooF/Train-Scheduler",live:"https://humanjboof.github.io/Train-Scheduler/",description:"Add a train to my app and watch moment.js calculate when the next will arrive!"}],F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={activeIndex:-1},a.handleClick=function(e,t){var n=t.index,o=a.state.activeIndex===n?-1:n;a.setState({activeIndex:o})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex;return o.a.createElement(N.a,{piled:!0,padded:"very",raised:!0},o.a.createElement(x.a,{textAlign:"center",size:"huge",dividing:!0,content:"Projects"}),o.a.createElement(z.a.Group,{itemsPerRow:2},q.map(function(a,n){return o.a.createElement(z.a,{key:n,raised:!0},o.a.createElement(I.a,{src:a.image,className:"Project-image"}),o.a.createElement(z.a.Content,null,o.a.createElement(z.a.Header,{textAlign:"center"},a.name),o.a.createElement(z.a.Description,{textAlign:"center"},a.description,o.a.createElement(S.a,{hidden:!0}),o.a.createElement(P.a,{styled:!0},o.a.createElement(P.a.Title,{active:t===n,index:n,onClick:e.handleClick,content:"Tech Used"}),o.a.createElement(P.a.Content,{active:t===n},o.a.createElement(B.a,null,a.tech.map(function(e,t){return o.a.createElement(B.a.Item,{key:t},e)}))))),o.a.createElement(S.a,{hidden:!0})),o.a.createElement(z.a.Content,null,o.a.createElement(H.a,{columns:"equal",textAlign:"center",divided:!0},o.a.createElement(H.a.Column,null,o.a.createElement(N.a,null,o.a.createElement("a",{href:a.repo,target:"_blank",rel:"noopener noreferrer"},"Repo Link"))),a.live?o.a.createElement(H.a.Column,null,o.a.createElement(N.a,null,o.a.createElement("a",{href:a.live,target:"_blank",rel:"noopener noreferrer"},"Live Link"))):"")))})))}}]),t}(o.a.Component),A={footer:{background:"rgb(51,73,69)"}},R=function(){return o.a.createElement(k.a,{fixed:"bottom",size:"tiny",style:A.footer},o.a.createElement(k.a.Item,null,o.a.createElement(w.a,{name:"react",loading:!0,inverted:!0,size:"large"})),o.a.createElement(k.a.Item,{position:"right"},o.a.createElement(w.a,{name:"copyright",inverted:!0,fitted:!0,size:"large"}),o.a.createElement(x.a,{as:"p",floated:"right",content:"2019",inverted:!0})))},O=function(){return o.a.createElement(N.a,{piled:!0,padded:"very",raised:!0,className:"home-segment"},o.a.createElement(H.a,{columns:16,celled:"internally"},o.a.createElement(H.a.Column,{width:4},o.a.createElement(I.a,{className:"home-img",bordered:!0,centered:!0,src:"./assets/img/joshua.jpg"})),o.a.createElement(H.a.Column,{width:12,textAlign:"center"},o.a.createElement(H.a.Row,null,o.a.createElement(x.a,{size:"huge",dividing:!0,content:"About Me"})),o.a.createElement(S.a,{hidden:!0}),o.a.createElement(H.a.Row,null,o.a.createElement(m.a,{text:!0,fluid:!0},o.a.createElement("p",null,"Hello! My name is Joshua LeBoeuf and I am a Full Stack Developer. I attended UNH coding bootcamp where I learned MERN stack. I have also been interested in technology, building computers forever made me fall in love with the hardware. Now I want to master the software and development side. I have a passion for learning, designing, backend, frontend and anything else that is thrown at me. I enjoy a challenge, I enjoy trying to find solutions to problems that seem nearly impossible. Take a look around, check out my work, and contact me if you would like to work on something together, have questions, or are looking for a dev to hire."),o.a.createElement(S.a,{hidden:!0}))),o.a.createElement(H.a.Row,null,o.a.createElement(w.a,{name:"computer",size:"huge",className:"Home-icons",bordered:!0}),o.a.createElement(w.a,{name:"code",size:"huge",className:"Home-icons",bordered:!0})))))},L=[{image:"./assets/img/mongodb.png"},{image:"./assets/img/express.png"},{image:"./assets/img/react.png"},{image:"./assets/img/nodejs.png"}],G=[["html5","css3 alternate","git","database"],["js","aws","code","docker"],["windows","linux","npm","computer"],["angular","gulp","less","sass"]],D=function(){return o.a.createElement(N.a,{piled:!0,raised:!0,padded:"very"},o.a.createElement(H.a,null,o.a.createElement(H.a.Row,{centered:!0},o.a.createElement(x.a,{size:"huge",content:"Mern Stack",dividing:!0,style:{margin:"1em"}})),o.a.createElement(H.a.Row,{centered:!0,style:{border:"1pt solid"}},L.map(function(e,t){return o.a.createElement(H.a.Column,{width:4,verticalAlign:"middle",key:t},o.a.createElement(I.a,{src:e.image,className:"Tech-top-icons"}))})),o.a.createElement(H.a.Row,{centered:!0},o.a.createElement(x.a,{size:"huge",content:"Technology",style:{marginTop:"1em"}})),o.a.createElement(S.a,null),G.map(function(e,t){return o.a.createElement(H.a.Row,{columns:"equal",verticalAlign:"middle",key:t},e.map(function(e,t){return o.a.createElement(H.a.Column,{textAlign:"center",key:t},o.a.createElement(w.a,{className:"Tech-bottom-icons",name:e,bordered:!0,size:"massive"}))}))}),o.a.createElement(H.a.Row,{centered:!0},o.a.createElement(x.a,{size:"huge",content:"And Many, Many more..."}))))},_=a(315),Q=[{title:"Click to go to my LinkedIn",icon:"linkedin",color:"blue",url:"https://linkedin.com/in/joshua-leboeuf"},{title:"Click to check out my Github",icon:"github",color:"black",url:"https://github.com/HumanJBooF"},{title:"Send me an Gmail",icon:"google",color:"red",url:null,mail:"mailto:humanjboof@gmail.com"},{title:"Download my resume",icon:"file text",color:"black",url:"./assets/resume/Resume-Joshua-LeBoeuf-1-21-2019.pdf",download:"Joshua-LeBoeuf-Resume"}],U=function(){return o.a.createElement(N.a,{piled:!0,padded:"very",raised:!0},o.a.createElement(H.a,{columns:"even"},o.a.createElement(H.a.Row,{centered:!0},o.a.createElement(x.a,{size:"huge",dividing:!0,content:"Contact me"})),o.a.createElement(H.a.Row,null,Q.map(function(e){return o.a.createElement(H.a.Column,{width:4},o.a.createElement(z.a,{raised:!0},o.a.createElement(z.a.Content,{textAlign:"center"},o.a.createElement(_.a,{trigger:o.a.createElement("a",{href:e.url?e.url:e.mail,target:e.url?e.url:null,download:e.download?e.download:null},o.a.createElement(w.a,{name:e.icon,size:"massive",color:e.color,className:"Contact-icons"})),content:e.title,position:"top center",verticalOffset:50,size:"large",hideOnScroll:!0,inverted:!0}))))}))))},W=a(138),Y=W.b.div({enter:{opacity:1,delay:300,beforeChildren:!0,ease:"easeInOut"},exit:{opacity:0}}),V=function(){return o.a.createElement(s.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(J,null),o.a.createElement(c.a,{render:function(e){var t=e.location;return o.a.createElement(W.a,null,o.a.createElement(Y,{key:t.pathname},o.a.createElement(m.a,{className:"App-container"},o.a.createElement(l.a,{location:t},o.a.createElement(c.a,{exact:!0,path:"/react_portfolio",component:O}),o.a.createElement(c.a,{exact:!0,path:"/react_portfolio/projects",component:F}),o.a.createElement(c.a,{exact:!0,path:"/react_portfolio/tech",component:D}),o.a.createElement(c.a,{exact:!0,path:"/react_portfolio/contact",component:U})))))}}),o.a.createElement(R,null)))};a(301);i.a.render(o.a.createElement(V,null),document.getElementById("root"))}},[[161,2,1]]]);
//# sourceMappingURL=main.36fc2f41.chunk.js.map