import logo1 from "./assets/logo1.svg";
import upload from "./assets/upload2.svg";
import "./Component4.css";
import { useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["PDF", "DOCX"];
export default function Component4() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(files);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    console.log(files);
  };
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };
  // if (files)
  //   return (
  //     <div className="uploads">
  //       <ul>
  //         {Array.from(files).map((file, idx) => (
  //           <li key={idx}>{file.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  return (
    <div>
      {!files && (
        <div className="center">
          <div className="border">
            <div className="">
              <p className="text-1">Upload Your Resume</p>
              <p className="text-2">and take the next step in your career</p>
              <center>
                <img src={upload} className="img1"></img>
                <br></br>
                <br></br>
                <br></br>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </center>
              <div className="center">
                {/* <input
                  type="file"
                  multiple
                  onChange={(event) => setFiles(event.target.files)}
                  hidden
                  ref={inputRef}
                ></input> */}
                {/* <div className="d1">
                  <p className="text-3">Scan Resume</p>
                </div> */}
              </div>
              {/* <div className="center">
                <p className="text-4">Drag and Drop a .pdf or .docx file</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
