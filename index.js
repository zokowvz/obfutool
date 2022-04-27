// js obf tool v1.0
// constantes
const config = require("./config.json")
const rs = require('readline-sync')
const obf = require('javascript-obfuscator')
const fs = require("fs")
const chalk = require("chalk") // npm i chalk@4.1.0
const { error } = require("console")
console.clear();
let pseudo = rs.question("Quel est votre pseudo ?\n" + chalk.red("> "))
console.clear();
menu = "\n[1] obf un fichier (js)\n[2] support\n[3] Mettre à jour le tool \n[4] quitter"

console.log(chalk.green(`


________ _________________________ ______________________   ________  .____     
\_____  \\______   \_   _____/    |   \__    ___/\_____  \  \_____  \ |    |    
 /   |   \|    |  _/|    __) |    |   / |    |    /   |   \  /   |   \|    |    
/    |    \    |   \|     \  |    |  /  |    |   /    |    \/    |    \    |___ 
\_______  /______  /\___  /  |______/   |____|   \_______  /\_______  /_______ \
        \/       \/     \/                               \/         \/        \/
                                    bienvenue ${pseudo} sur la v1.0 d'${config.project}   
                                    by ${config.credits}

`))
console.log(menu)
let choix = rs.question("Quel option voulez-vous utiliser ?\n" + chalk.grey("\n[" + "ObfuTool" + "]$ "))

if(choix == "2"){
console.clear();
console.log(chalk.green(`


________ _________________________ ______________________   ________  .____     
\_____  \\______   \_   _____/    |   \__    ___/\_____  \  \_____  \ |    |    
 /   |   \|    |  _/|    __) |    |   / |    |    /   |   \  /   |   \|    |    
/    |    \    |   \|     \  |    |  /  |    |   /    |    \/    |    \    |___ 
\_______  /______  /\___  /  |______/   |____|   \_______  /\_______  /_______ \
        \/       \/     \/                               \/         \/        \/
                                    [2] support   
                          \n                          si tu as besoin d'aide, rejoins ${config.support}
`))
let supportchoix = rs.question("Voulez-vous quitter ? [o/n]" + chalk.red("> "))
if(supportchoix == "o"){
   console.clear();
   console.log(chalk.grey("A la prochaine !"))

}
if (supportchoix == "n"){
    console.log("ok mon reuf")
}
}

if(choix == "1"){
    console.clear();
    console.log(chalk.green(`


    ________ _________________________ ______________________   ________  .____     
    \_____  \\______   \_   _____/    |   \__    ___/\_____  \  \_____  \ |    |    
     /   |   \|    |  _/|    __) |    |   / |    |    /   |   \  /   |   \|    |    
    /    |    \    |   \|     \  |    |  /  |    |   /    |    \/    |    \    |___ 
    \_______  /______  /\___  /  |______/   |____|   \_______  /\_______  /_______ \
            \/       \/     \/                               \/         \/        \/
                                        [1] ObfuTool   
                              \n                          by ${config.credits}
    `))    
    let fichier = rs.question("Quel est le nom de votre fichier a obf (ex: index) ?\n" + chalk.red("> "))

fs.readFile(`./fichier/${fichier}.js`, 'utf8', (err, data) => {
    if (err) {
      console.error(`Vous devez mettre ` + chalk.red(`${fichier}.js` + ` dans le dossier fichier du tool !`));
      return;
    }
    console.clear();
    var obfresult = obf.obfuscate(data,
        
            
        controlFlowFlattening = config.controlFlowFlattening, 
        controlFlowFlatteningThreshold =  config.controlFlowFlatteningThreshold,
        numberToExpressions = config.numberToExpressions, 
        simplifier = config.simplifier,
        stringArrayShuffle = config.stringArrayShuffle,
        splitStrings = config.splitStrings,
        stringArrayThreshold = config.stringArrayThreshold
      
    ) ;
    
    let dataobf = obfresult.getObfuscatedCode(); 
  fs.writeFile('./fichier/result/result.js', dataobf, (err) => {
    console.log(chalk.red("[+] ") + "Votre fichier a bien ete save a l'emplacement /fichier/result/result.js !");  
    console.log(chalk.grey("[?] Je vous remercie d'utiliser ObfuTool !"))
    let obfchoix = rs.question("\nVoulez-vous quitter ? [o/n]" + chalk.red(" \n>"))
      if(obfchoix == "o"){
        console.clear();
        console.log(chalk.grey("A la prochaine !"))

    }
    if(obfchoix == "n"){
      console.log("soon")
    }
  })
});
}

