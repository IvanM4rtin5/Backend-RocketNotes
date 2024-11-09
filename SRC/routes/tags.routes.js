const {Router} = require("express");

const ensureAuthentticated = require("../middlewares/ensureAuthentticated");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthentticated, tagsController.index );

module.exports = tagsRoutes;