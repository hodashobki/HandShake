const MessageController=require("../controllers/message.controller");

module.exports=app=>{
    app.get("/api/messages/",MessageController.findAllMsg);
    app.post("/api/messages/new/",MessageController.createNewMsg);
}