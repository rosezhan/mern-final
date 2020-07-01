dbPassword = 'mongodb+srv://REACTion21:REACTion21@cluster0-hpeo1.gcp.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword,
    secretOrKey: "secret"
    // useNewUrlParser: true,
    // useUnifiedTopology: true
};

//still try to solve the warning "current Server Discovery and Monitoring engine is deprecated"