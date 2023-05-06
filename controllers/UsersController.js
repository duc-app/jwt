'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        console.log('chay vao day');
        console.log(db);
        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            console.log(err);
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        console.log('sssssss');
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [req.params.userId], (err, response) => {
            if (err) throw err
            //format ngay thang
            // response[0]['birthday'] = response[0]['birthday'].toISOString().replace('T', ' ').substring(0, 19);
            // response[0]['created'] = response[0]['created'].toISOString().replace('T', ' ').substring(0, 19);
            res.json(response)
            
        })
    },
    update: (req, res) => {
        let data = req.body;
        let userId = req.params.userId;
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, userId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        console.log(data);
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [req.params.userId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}