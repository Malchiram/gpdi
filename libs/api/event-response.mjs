import { writeFileSync } from "node:fs";
const url = `http://localhost:1337/api/events`;
const response = await fetch(url)
const body = await response.json()
const posts = JSON.stringify(body,null,2)

const file = "libs/api/events.json"
writeFileSync(file , posts,"utf8")
