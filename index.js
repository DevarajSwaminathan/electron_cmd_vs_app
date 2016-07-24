const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')
const os = require('os')

let win;

app.on('ready', () => {
    arguments = {prop1: process.argv}
    if(arguments.prop1[2])
    {
        console.log(arguments.prop1[2]);
    }
    else
    {
        win = new BrowserWindow({width:800,height:600})
        win.loadURL('file://' + __dirname + '/index.html')
   
        win.webContents.openDevTools()
    }	
})