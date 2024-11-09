const {Router} = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UserController = require("../controllers/usersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthentticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UserController();
const usersAvatarController = new UserAvatarController();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated ,usersController.update );
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update)

module.exports = userRoutes;