const copyFiles = new Promise((resolve, reject) => {
    
        console.log("copying files....");
    
        let success = true;
        setTimeout(() => {
            console.log();
    
            if (success){
                resolve("Files copied successfully");
        
            } else {
                reject("Error, Could not copy");
            }    
        }, 2000);
    
       
    });
    console.log(copyFiles)
    
    const readFiles = async () => {
        try {
            const msg = await copyFiles;
            console.log("Trying to read the file.")
        } catch (err) {
            console.log(err)
        }finally {
            console.log("Hello")
        }
    };
    
    readFiles()
    
