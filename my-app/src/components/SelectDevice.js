import React, { useState } from "react";
import '../css/Select.css'
import { FiDownloadCloud } from "react-icons/fi";

function Download() {
  const handleClick = () => {
    // Do something when the button is clicked
    console.log('Button clicked');
  };

    return (
      <button
      style={{ border: '1px solid black', borderRadius: '4px', padding: '4px' ,marginLeft:'220px'}}
      onClick={handleClick}
    >
      <FiDownloadCloud size={24} />
      Download
    </button>
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
        <p>Click to download PDF of all data in collected by selected devices.</p>
        <div style={{ display: 'flex', flexDirection: "row" }}>
          
          <Download></Download>
        </div>
        
      </div>
    </div>
  );
}
 
export default App;