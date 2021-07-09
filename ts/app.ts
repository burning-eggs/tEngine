// Main entry point for the application

var engine: TE.Engine

window.onload = function() {
    engine = new TE.Engine()

    engine.start()
}

window.onresize = function() {
    engine.resize()
}