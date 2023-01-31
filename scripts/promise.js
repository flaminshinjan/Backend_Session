const copyFiles = () => {
    console.log("copying files....");

    let success = true;
    setTimeout(() => {
        console.log();

        if (success){
            console.log("Files copied successfully");
    
        } else {
            console.log("Error, Could not copy");
        }    
    }, 2000);

   
};


const readFiles = () => {
    copyFiles();
    console.log("Error, Could not read files");
};

readFiles()

