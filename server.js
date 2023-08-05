if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html')));
  }