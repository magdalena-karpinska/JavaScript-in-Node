import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
.then((respone) => response.json())
.then ((data) => data.sesults)
.then ((results) => console.log(`We got ${results.length} rows`));

import { readFile } from "fs";
readFile("thisFileDoesntExist", "utf8", (err, file) => {
    if (err) {
        console.log("We got an error", { err });
    }
    // no error
    console.log(`That file has ${file.split("\n").length} lines`);
});

getResponseFromUrl("https://randomuser.me/api/", (err, response) => {
    if (err) {
        console.log("getResponseFromUrl returned an error");
        return;
    }
    getJsonFromResponse(response, (err, json) => {
        if (err) {
            console.log("getJsonFromResponse returned an error");
            return;
        }
        getResultsObject(json, (err, results) => {
            if (err) {
                console.log("getResultsObject returned an error");
                return;
            }

            console.log(`We got ${results.length} rows`);
        });
    });
});

fsPromise
.readFile("promises.mjs", "utf-8")
.then((file) => console.log(`That file has ${file.split("\n").length} lines`))
.catch((err) => console.log("We got an error", { err }));

import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => {
        throw new Error("This is the error that I made");
    })
    .then((results) => console.log(`We got ${results.length} rows`))
    .catch((err) => console.log("Something went wrong", { err }));