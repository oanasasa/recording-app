import React from 'react';


const Admin = () => {

    // function uploadFile(files, user) {
    //     var formData = new FormData();
        
    //     files.map((file, index) => {
    //         formData.append(`file${index}`, file);
    //     });
        
    //     formData.append('user', user);
        
    //     fetch('https://path/to/api', {
    //         // content-type header should not be specified!
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(response => response.json())
    //         .then(success => {
    //         // Do something with the successful response
    //         })
    //         .catch(error => console.log(error)
    //     );
    // }

    return(
        <div className="page-container">
            <div className="section">
                <div className="row wc1">
                    <div className="col c1">
                        <p>Click on the "Choose File" button to upload a file:</p>

                        <form action="/action_page.php">
                        <input type="file" id="myFile" name="filename" />
                        <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;