const app = Elm.Main.init(
    {
        flags:
        {
            store: JSON.parse(localStorage.getItem('storage'))
            , api_server: "http://localhost:8080/api"
        }
    });

console.log(JSON.parse(localStorage.getItem('storage')));

// Localstore Port
app.ports.save_.subscribe(storage => {
    localStorage.setItem('storage', JSON.stringify(storage))
    app.ports.load_.send(storage)
})

app.ports.loadDashboard.subscribe(id => {
    // getDash(id);
    app.ports.onDashboardMsg.send("Dashboard loaded")
})