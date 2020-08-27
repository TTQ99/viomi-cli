#!/usr/bin/env node
const program = require("commander")
// const { command } = require("commander")
const version = require("./package.json").version

program.version(version, "-v, --version")
// console.log(program.command)
program.command("create <app-name>")
  .description("使用viomi-cli创建项目")
  .option("-d --dir <dir>", "创建目录")
  .action((name, command) => {
    const create = require('./create/index')
    console.log(create)
    create(name)
  })
program.parse(process.argv);
// console.log(version)