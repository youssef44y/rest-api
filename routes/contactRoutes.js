const express = require("express")
const router = express.Router()

const {getContact,addContact,updateContact,deleteContact} = require('../controllers/contactControllers')


router.get("/get", getContact)
router.post("/post",addContact)
router.put("/post/:id",updateContact)
router.delete("/post/:id",deleteContact)
module.exports = router