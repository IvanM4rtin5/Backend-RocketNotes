const {Router} = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthentticated = require("../middlewares/ensureAuthentticated");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthentticated)

notesRoutes.get("/", notesController.index );
notesRoutes.post("/", notesController.create );
notesRoutes.get("/:id", notesController.show );
notesRoutes.delete("/:id", notesController.delete );

module.exports = notesRoutes;