module.exports = {
    port: 8001,
    url: 'mongodb://localhost:27017/cats',
    username: '',
    password: '',
    session: {
        secret: 'abc',
        resave: true,
        saveUninitialized: true
    },
    saltword: 'ABL',
    mailusername: "hidden",
    mailpassword: "hidden"
};
