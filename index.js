// Load our mod meta data.
if (CCArchipelago === undefined) var CCArchipelago = {};
CCArchipelago.name = "Cookie Clicker for Archipelago";
CCArchipelago.pic = "";
CCArchipelago.version = "1.0";
CCArchipelago.GameVersion = "2.048";

// Load CCSE, if not loaded.
if (typeof CCSE == "undefined")
    Game.Load("https://klattmose.github.io/CookieClicker/CCSE.js");

// Insert our mod data.
CCArchipelago.launch = function() {
    console.log("Hello, world!");
}

// Final checks for our data to load it.
if (!CCArchipelago.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        CCArchipelago.launch();
    } else {
        if(!CCSE) var CCSE = {};
        if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(CCArchipelago.launch);
    }
}
