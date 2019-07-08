var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var path = require('path');

//--WORKPLACE/START-------->
var port = process.env.PORT || 3000;
var isProd = process.env.PORT ? true : false;
var viewsPath = path.join(__dirname, 'views');
var publicPath = path.join(__dirname, 'public');
var app = express();

//--CSS/JS/IMG-------------->
app.use(express.static(publicPath));


// console.log('viewsPath', viewsPath);
app.set('views', viewsPath);

//--ACTIVATE EXTENSIONS----->
app.engine('handlebars', exphbs({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));

//----------------------->
//--ROUTING---------------->
//----------------------->
app.get('/', function(req, res){
    res.render('home',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",
            css5:"moduleLittleCard.css",
            css6:"animations.css",
            css7:"style.css",
            css8:"moduleResponsIndex.css"

        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
            js4:"mobile.js"
        },
        content: {
            en: {
                navbar: {

                    textNavbar1:"Profile",
                    textNavbar2:"Experiences",
                    textNavbar3:"Contact",
                    textNavbar4:"Share"
                },
                mobileMenu: {

                    textMobileMenu1:"Profile",
                    textMobileMenu2:"Experiences",
                    textMobileMenu3:"Creations",
                    textMobileMenu4:"Projects",
                    textMobileMenu5:"Contact"
                },
                character: {

                    textCharacter1:"Entrepreneur",
                    textCharacter2:"Curious",
                    textCharacter3:"Adventurer",
                    textCharacter4:"Creative"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS",
                    textTitleCaroussel2:"PROGRAMS ORIGINALS ADFLIX"
                }

            },
            fr: {},
        }
    })
});

app.get('/contact', function(req, res){
    res.render('contact',{
        isProd,
        Styles:{
            css1:"moduleInfo.css",
            css2:"moduleCard.css",
            css3:"moduleLittleCard.css",
            css4:"animations.css",
            css5:"contact.css",
            css6:"moduleResponsIndex.css"
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
            js4:"mobile.js"
        },
        content: {
            en: {
                navbar: {

                    textNavbar1:"Profile",
                    textNavbar2:"Experiences",
                    textNavbar3:"Contact",
                    textNavbar4:"Share"
                },
                mobileMenu: {

                    textMobileMenu1:"Profile",
                    textMobileMenu2:"Experiences",
                    textMobileMenu3:"Creations",
                    textMobileMenu4:"Projects",
                    textMobileMenu5:"Contact"
                },
                character: {

                    textCharacter1:"Entrepreneur",
                    textCharacter2:"Curious",
                    textCharacter3:"Adventurer",
                    textCharacter4:"Creative"
                },

            },
            fr: {},
        }
    })
});

app.get('/profile', function(req, res){
    res.render('profile',{
        isProd,
        Styles: {
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsProfil.css"
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "heroprofil",
        content: {
            en: {
                tag1:"Entrepreneur",
                tag2: "Curious",
                title:"PROFIL",
                title2:"Presentation",
                seasons: "Seasons",
                presentation: {
                    
                    textPresentation:"Jeremy 26 years old, entrepreneur at heart. I am an all-rounder person! When something excites me you can be sure that I am 100% focused on it till it is fully accomplished."
                },
                advantage: {

                    titleAdvantage:"Advantage:",
                    textAdvantage:"My curiosity is certainly my main asset. My autodidactic apprenticeship comes from this ability to seek out everything I don't know yet."
                },

                passions: {

                    titlePassions:"My passions:",
                    textPassions1:"Mixed martial arts",
                    textPassions2:"Virtual reality",
                    textPassions3:"Personal development",
                    textPassions4:"Computer design"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }

            },
            fr: {}

        }
    })
});

app.get('/expfirst', function(req, res){
    res.render('exp',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsExpF.css",
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "hero",
        content: {
            en: {
                tag1:"Adventurer",
                tag2: "Athlete",
                title:"EXPERIENCES",
                title2:"Entrepreneur",
                seasons: "Seasons",
                activity: {

                    titleActivity:"Activity:",
                    textActivity:"E-business"
                },
                details: {
                    
                    titleDetails:"Details:",
                    textDetails:'Creation of 2 e-business shops. The first one, generalist store "Modern blue". Then, the second one, in the women\'s fashion accessories sector, "Don i Dori"'
                },
                platform: {

                    titlePlatform:"Platform:",
                    textPlatform:"Shopify"
                },
                businessModel:{ 

                    titleBusinessModel:"Business model:",
                    textBusinessModel:"Dropshipping"
                },  
                customerAcquisition:{

                    titleCustomerAcquisition:"Customer acquisition:",
                    textCustomerAcquisition:"Facebook Ads, Snapchat Ads, instagram influencer"
                }, 
                figuresOver24hours: {   

                    titleFiguresOver24hours:"Figures Over 24 hours:",
                    textFiguresOver24hours:"50€/advertising budget = 500/700 traffic, ROI 4.5"
                },
                duration:{
                    
                    titleDuration:"Duration:",
                    textDuration:"1 year"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }
            },
            fr: {}

        }
    })
});

app.get('/expreturn', function(req, res){
    res.render('expReturn',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsExpS.css"
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "hero2",
        content: {
            en: {
                tag1:"Focus",
                tag2: "Cinephile",
                tag3: "Funny",
                title:"EXPERIENCES",
                title2:"Santiane.fr",
                seasons: "Seasons",
                activity: {

                    titleActivity:"Activity:",
                    textActivity:"Health insurance telemarketer"
                },
                details: {
                    
                    titleDetails:"Details:",
                    textDetails:"Between 9am-7pm selling subscription by phone on a 50% qualified prospect basis"
                },
                platform: {

                    titlePlatform:"Platform:",
                    textPlatform:"Internal CRM software"
                },
                figuresOver10hours: {   

                    titleFiguresOver10hours:"Figures over 10 hours:",
                    textFiguresOver10hours:"200/calls/day, with the daily objective of 3 subscribing contracts minimum"
                },
                duration:{
                    
                    titleDuration:"Duration:",
                    textDuration:"6 months"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }
            },
            fr: {}

        }
    })
});

app.get('/expgenesis', function(req, res){
    res.render('expGenesis',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsExpG.css",
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "hero3",
        content: {
            en: {
                tag1:"Geek",
                tag2: "Autodidactic",
                title:"EXPERIENCES",
                title2:"All Comunication Network",
                seasons: "Seasons",
                activity: {

                    titleActivity:"Activity:",
                    textActivity:"Door-to-door commercial and telemarketer"
                },
                details: {
                    
                    titleDetails:"Details:",
                    textDetails:"By geographical area, 9am-12.30pm door-to-door prospecting in all sectors combined. 2pm-9pm telephone prospecting"
                },
                platform: {

                    titlePlatform:"Platform:",
                    textPlatform:"personal online shop, for orders"
                },
                figuresOver12hours: {   

                    titleFiguresOver12hours:"Figures over 12 hours:",
                    textFiguresOver12hours:"100/calls/day, with a personal daily objective of having a minimum of 1 contract subscribed"
                },
                duration:{
                    
                    titleDuration:"Duration:",
                    textDuration:"9 months"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }
            },
            fr: {}

        }
    })
});

app.get('/form', function(req, res){
    res.render('form',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsForm.css"
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "heroform",
        content: {
            en: {
                tag1:"Ambitious",
                tag2: "Punctual",
                title:"FORMATIONS",
                title2:"Developer web and application",
                seasons: "Seasons",
                technology: {

                    titleTechnology:"Technology:",
                    textTechnology1:"Redux / React",
                    textTechnology2:"React Native",
                    textTechnology3:"Express / Nodejs",
                    textTechnology4:"Mongoose / mongodb",
                    textTechnology5:"bootstrap4"
                },
                details: {
                    
                    titleDetails:"Details:",
                    textDetails:"Coding 8 hours/day on site + 5 hours/night at home"
                },
                indicatorFigures: {

                    titleIndicatorFigures:"Indicator figures:",
                    textIndicatorFigures:"+1600 hours during on-site + in-house training, +1000 hours of self-study"
                },
                organization: {   

                    titleOrganization:"Organization:",
                    textOrganization:"Konexio, Digitous training"
                },
                theMost: {

                    titleTheMost:"The plus:",
                    textTheMost:"Soft skills 80 hours at Saleforce Paris + certification administrator"
                },
                duration:{
                    
                    titleDuration:"Duration:",
                    textDuration:"Training of 5 months + 3 months of internship"
                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }
            },
            fr: {}

        }
    })
});

app.get('/formsecond', function(req, res){
    res.render('formSecond',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsForm2.css"
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "heroform2",
        content: {
            en: {
                tag1:"Reader",
                tag2: "Jovial",
                title:"FORMATIONS",
                title2:"Degrees",
                seasons: "Seasons",
                bep: {

                    titleBep:"BEP:",
                    textBep:"Audiovisual and multimedia electronic system",
                },
                nationalPolice:{

                    titleNationalPolice:"National Police:",

                    cqp: {
                    
                        titleCqp:"CQP:",
                        textCqp:"Professional certificate in security professions, such as:",
                        textCqpList1:"Close protection agent", 
                        textCqpList2:"Surveillance and Security Officer", 
                        textCqpList3:"Video protection operator", 
                        textCqpList4:"ATM maintenance and management", 
                        textCqpList5:"Airport security", 
                        textCqpList6:"Cash in transit"                     
                    }

                },
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }

            },
            fr: {}

        }
    })
});

app.get('/stages', function(req, res){
    res.render('stages',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsStage.css"

        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "herostages",
        content: {
            en: {

                tag1:"Creative",
                tag2: "Gamer",
                title:"Stages",
                title2:"Soon...",
                seasons: "Secret seasons",
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"
                }
            },
            fr: {}

        }
    })
});

app.get('/soon', function(req, res){
    res.render('soon',{
        isProd,
        Styles:{
            css1:"owl.carousel.css",
            css2:"owl.theme.default.min.css",
            css3:"moduleInfo.css",
            css4:"moduleCard.css",  
            css5:"animations.css",
            css6:"moduleLittleCard.css",
            css7:"moduleResponsSoon.css"

        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"main.js",
        },
        hero: "herosoon",
        content: {
            en: {

                title:"UPCOMING",
                title2:"Soon. . .",
                titleCaroussel: {

                    textTitleCaroussel1:"CURRENT TRENDS"

                }
            },
            fr: {}

        }
    })
});

app.get('/comingsoon', function(req, res){
    res.render('comingSoon',{
        isProd,
        Styles:{              
            css1:"animate.css",
            css2:"util.css",
            css3:"comingsoon.css"
        },
        Scripts:{
            js1:"tilt.jquery.min.js",
            js2:"comingsoon.js",
        }
    })
});

app.get('/projects', function(req, res){
    res.render('projects',{
        isProd,
        Styles:{
            css1:"projects.css",
            css2:"moduleInfo.css",
            css3:"moduleResponsProjects.css"
        },
        hero: "heroprojects",
    })
});

app.get('/projects/adstream', function(req, res) {
    res.render('adstream',{
        isProd,
        Styles:{   
            css1:"streaming.css",
            css2:"moduleResponsAdstream.css",
            css3:"moduleResponsProjects.css",
            css4:"owl.carousel.css",
            css5:"owl.theme.default.min.css",
            css7:"moduleLittleCard.css",
            // css3:"moduleInfo.css",
            // css6:"moduleCard.css",
            // css5:"animations.css",
            // css6:"projects.css", 
          
        
        },
        Scripts: {
            js1:"owl.carousel.min.js",
            js2:"pagetransitions.js",
            js3:"mainPosters.js",
            js5:"scrollStream.js"
        },
        Posters: {
            card1:"/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
            card2:"/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
            card3:"/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
            card4:"/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
            card5:"/kZMCbp0o46Tsg43omSHNHJKNTx9.jpg",
            card6:"/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            card7:"/ttN0czDnCpr64aj3ANGEf3DKE1L.jpg",
            card8:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            card9:"/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            card10:"/bSMSO9xupd4R4vwTPqigHn2quLN.jpg",
            card11:"/crvO4xm2gs5W0joyKmJf1l1ThZV.jpg",
            card12:"/86Y6qM8zTn3PFVfCm9J98Ph7JEB.jpg",
            card13:"/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
            card14:"/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
            card15:"/xRWht48C2V8XNfzvPehyClOvDni.jpg",
            card16:"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            card17:"/kfZqwGuvEBAysAbCsa0QLKoSYR.jpg",
            card18:"/eItrj5GcjvCI3oD3bIcz1A2IL9t.jpg",
            card19:"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            card20:"/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg",
            card21:"/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
            card22:"/5damnMcRFKSjhCirgX3CMa88MBj.jpg",
            card23:"/6n7ASmQ1wY2cxTubFFGlcvPpyk7.jpg",
            card24:"/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
            card25:"/dzg8lHS78l5Xxpd2EM5H541Qn2s.jpg",
            card26:"/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        },
        hero: "heroadstream",
    })
});

app.get('/projects/beatsy', function(req, res) {
    res.render('loading',{
        isProd,
        Styles: {
            css1:"loadAnim.css"
        },
    })
});


//--NODEMAILER COMING SOON------------->
app.post('/sendnewsletter', (req, res) => {
    const output = `
        <p><span style="color:#eb0000; font-size:1.4em;font-weight:bold;">COMING SOON</span> have send new request</p>
        <h3>Contact Details</h3>
        <ul>  
            <li style="letter-spacing:1.5px; word-spacing:1px;line-height:2em;">Email: <strong> ${req.body.email}</strong></li>
        </ul>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: 'adeler.jeremy@gmail.com', 
          pass: 'Pi314159265358979' 
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.sender, // sender address
        to: 'adeler.jeremy@gmail.com', // list of receivers
        subject: 'ADFLIX Newsletter Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('comingSoon', {
            msg:'Successful registration',
            Styles: {
                css1:"comingsoon.css",
                css2:"animate.css",
                css3:"util.css",
            },
            Scripts: {
                js1:"tilt.jquery.min.js",
                js2:"comingsoon.js",
            }
        });
    });
});

//--NODEMAILER------------->
app.post('/send', (req, res) => {
    const output = `
        <p><span style="color:#eb0000; font-size:1.4em;font-weight:bold;">${req.body.company}</span> have send new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
            <li style="letter-spacing:1px; word-spacing:1px;line-height:2em;">Name: <strong> ${req.body.name}</strong></li>
            <li style="letter-spacing:1px; word-spacing:1px;line-height:2em;">Company: <strong> ${req.body.company}</strong></li>
            <li style="letter-spacing:1px; word-spacing:1px;line-height:2em;">Email: <strong> ${req.body.email}</strong></li>
            <li style="letter-spacing:1px; word-spacing:1px;line-height:2em;">Phone: <strong> ${req.body.phone}</strong></li>
        </ul>
        <h3>Message</h3>
        <div style="letter-spacing:1px; word-spacing:1px;">
            <p>${req.body.message}</p>
        </div>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: 'adeler.jeremy@gmail.com', 
          pass: 'Pi314159265358979' 
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.sender, // sender address
        to: 'adeler.jeremy@gmail.com', // list of receivers
        subject: 'ADFLIX Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('contact', {
            msg:'Message correctly sent',
            Styles:{
                css1:"moduleInfo.css",
                css2:"moduleCard.css",
                css3:"moduleLittleCard.css",
                css4:"animations.css",
                css5:"contact.css",
                css6:"moduleResponsIndex.css"
            },
            Scripts: {
                js1:"owl.carousel.min.js",
                js2:"pagetransitions.js",
                js3:"main.js",
                js4:"mobile.js"
            },
        });
    });
});

//--PLAYGROUND------------->
app.listen(port, function() {
    console.log('Server start on port ', port);
});
