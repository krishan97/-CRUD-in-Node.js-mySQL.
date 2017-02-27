var db=require('./mysql/mysql.js');  // db file path 
var dbQuery={
    getAllrows:function(callback){
        return db.query("select * from customer",callback);
    },
    getIdrows:function(id,callback){
        return db.query("select * from customer where id=?",id,callback);
    },
    inserData:function(arr,callback){
       return db.query("insert into customer (name,email,address,phone) value (?,?,?,?)",[arr.userName,arr.email,arr.address,arr.phone],callback);
    }, 
    updateData:function(data,callback){
 return db.query("update  customer set name=?,email=?,address=?,phone=? where id=?",[data.userName,data.email,data.address,data.phone,data.id],callback);
    }, 
    deleteRow:function(id,callback){
        return db.query("delete from  customer where id=?",id,callback);
    }
}
module.exports = dbQuery;
