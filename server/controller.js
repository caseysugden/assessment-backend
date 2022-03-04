const users = require('./db.json');
let globalID = 4;

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },
    getFortune: (req, res) => {
        const fortunes = [
            "You will meet the love of your life this year",
            "You will have an unexpected accident soon.",
            "You will develop a hobby you love",
            "You will find a new friendship today",
            "You will experience something very lucky this week",
        ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
        
    },
    getContinent: (req, res) => {
        const continents = ["North America", "South America", "Europe", "Asia", "Africa", "Australia", "Antarctica"];
      
        // choose random continent
        let randomIndex = Math.floor(Math.random() * continents.length);
        let randomContinent = continents[randomIndex];
      
        res.status(200).send(randomContinent);
        
    },
    getAnimal: (req, res) => {
        const animals = ["Dog", "Cat", "Parrot", "Monkey", "Shark", "Bat", "Cow"];
      
        // choose random animal
        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];
      
        res.status(200).send(randomAnimal);
        
    },
    getZodiac: (req, res) => {
        const zodiacs = ["Aquarius", "Pisces", "Aries", "Tauras", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
      
        // choose random zodiac
        let randomIndex = Math.floor(Math.random() * zodiacs.length);
        let randomZodiac = zodiacs[randomIndex];
      
        res.status(200).send(randomZodiac);
        
    },

    getUsers: (req, res) => res.status(200).send(users),
    // createUser: (req, res) => {

    // },
    // updateUser: (req, res) => {

    // },
    deleteUser: (req, res) => {
        let index = users.findIndex(elem => elem.id === +req.params.id);
        users.splice(index, 1);
        res.status(200).send(users);
    },
    
}