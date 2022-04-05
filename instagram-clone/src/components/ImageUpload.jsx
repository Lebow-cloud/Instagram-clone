import { Button } from "@material-ui/core";
import "../css/ImageUpload.css"
import firebase from "firebase";
import { React, useState } from "react";
import { db, storage } from "../firebase";

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    //TAKES 3 ARGUMENTS
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function
        console.log(error);
        alert(error.message);
      },
      () => {
        // COMPLETE FUNCTION
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post INSDE db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageupload">
      <progress className="imageupload_progress" value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />

      <input type="file" onChange={handleChange} />

      <Button className="imageupload__button" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;
