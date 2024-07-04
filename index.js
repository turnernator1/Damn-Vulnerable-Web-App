import express from "express";
import cookieParser from "cookie-parser";
import escapeHTML from "escape-html";
import unserialize from "node-serialize";
import serialize from "node-serialize";
//import { exec } from 'child_process';
import vm from "vm";
const app = express();

app.use(cookieParser());

function sandboxUnserialize(cookie) {
    let sandbox = {
        unserialize,
        cookie,
    Buffer };
   const context = new vm.createContext(sandbox);
   const script = new vm.Script(`
       const result = unserialize.unserialize(Buffer.from(cookie, 'base64').toString());
       result;`);
   try{
       return script.runInContext(context);
    } catch (e) {
       console.log("error in unserialize: " + e);
    }
}


// unserialize vulnerablity
app.get("/", (req, res) => {
    if (req.cookies.session){
        let obj = {};
        // function to check for session cookie
        const cookie = req.cookies.session;
        //unserialise from base64
        obj = sandboxUnserialize(cookie);
        //const obj = unserialize.unserialize(Buffer.from(cookie, "base64").toString());
        res.send(`Hello ${escapeHTML(obj.username)}`);
    } else {
        // if no session cookie, set session cookie to base64 encoded string of serialized object
        const obj = { username: "unknown" };
        const serialized = serialize.serialize(obj);
        res.cookie("session", Buffer.from(serialized).toString("base64"));
        res.send("Hello, please Login to continue");
    }
});

//unserialize.unserialize({"rce":"_$$ND_FUNC$$_function(){\r\n        exec('dir', function(error, stdout, stderr) { console.log(stdout) });\r\n        }()"});

app.listen(3000, () => console.log(`Server running on port 3000`));