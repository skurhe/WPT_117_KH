const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac",
};

async function selectMsg()
{
    const connection=mysql.createConnection(dbinfo);
    console.log("connection sucess");
    let sql=`select * from msg`;
    await connection.queryAsync(sql);
    const list=await connection.queryAsync(sql);
    await connection.endAsync();
    return list;
}

async function addMsg(msg){
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`insert into msg(message) values(?)`;
    connection.queryAsync(sql,[msg.msg]);
    console.log("Entry Added into data base.....")
    await connection.endAsync();
}

//  test={msg:"hello"};
//  addMsg(test);

//console.log(selectMsg());




module.exports={selectMsg,addMsg};