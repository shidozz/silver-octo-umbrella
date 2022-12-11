const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);
const Logger = require("../Logger");

module.exports = async (client) => {
  (await pGlob(`${process.cwd()}/modals/*/*.js`)).map(async (ModalsFile) => {
    const Modals = require(ModalsFile);
    if (!Modals.name) return Logger.warn(`Modals non-fonctionnel: ajouter un nom à votre menu ↓\nFichier -> ${ModalsFile}`);
    client.modals.set(Modals.name, Modals);
    
  });
};