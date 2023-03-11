import React, { useState } from "react";
import '../css/Select.css'
import { FiDownloadCloud } from "react-icons/fi";
import { Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function Download(props) {
  const [loading, setLoading] = useState(false);
   const  handleClick = async () => {
    
    setLoading(true);
    console.log(props.selecs);
    //Download fetch call here.
    await fetch("/generatepdf",{
      method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(props.selecs),
    }).then(res => {console.log(res);setLoading(false);});
    
    
  };

    return (
      <div>
        {loading === false ?   <Button
        style={{  borderRadius: '4px', padding: '4px' ,marginLeft:'220px'}}
        onClick={handleClick}
      >
        <a href='file1.pdf' download='file1.pdf'>
        
        <FiDownloadCloud size={24} />
            Download
         </a>
        </Button>  : <label>Please wait.....</label>}
      </div>
    );
  }
  

function App() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "Device 1" },
    { id: "2", value: "Device 2" },
    { id: "3", value: "Device 3" },
    { id: "4", value: "Device 4" },
    { id: "5", value: "Device 5" },
    { id: "6", value: "Device 6" },
  ];
 
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
 
    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };
 
  return (
    
    <div className="container_select">
      <div className="card_select">
        <div className="card-header_select">
          <p className="title">Select device for sensor data download as a custom report.</p>
        </div>
 
        <div className="card-body_select">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container_select">
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelect}
                />
                <label >{item.value}</label>
              </div>
            );
          })}
        </div>
        <p>Click to download PDF of all data collected by selected devices, during selected period.</p>
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <Spinner animation="border" />
          <Download selecs={checkedList}></Download>
        </div>
        
      </div>
    </div>
  );
}
 
export default App;