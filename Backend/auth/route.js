import express from "express" 
import  {login, logout,signup}  from "../controllers/auth.controller.js"

const router=express.Router() 

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

//router.post("/todos",todos)
//router.get("/todos",todosGet)
//router.put("/todos")
//router.delete("/todos")
//router.get("/sessions")


export default router