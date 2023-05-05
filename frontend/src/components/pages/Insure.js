import React from 'react';
const Web3 = require('web3');
const web3 = new Web3('http://localhost:3000');



function createDataset2() {
  console.log('createDataset function called');

  // Get form values
  const age = parseInt(document.getElementById('age').value);
  var sex = 0
  if(document.getElementById('sex').value=="male"){
    sex=1
  };
  const bmi = parseInt(document.getElementById('bmi').value);
  const children = parseInt(document.getElementById('children').value);
  var smoker = 0
  if(document.getElementById('smoker').value=="yes"){
    smoker=1
  };
  var region = 0
  if(document.getElementById('region').value=="northwest"){
    region=1
  }
  else{
    if(document.getElementById('region').value=="southeast"){
      region=2
    }
    else{
      if(document.getElementById('region').value=="southwest"){
        region=3
      }
    }
  }

  // Create a dataset object
  const dataset = [{
      "age": age,
      "sex": sex,
      "bmi": bmi,
      "children": children,
      "smoker":smoker,
      "region":region
  }];
  console.log(dataset);

  // Convert the dataset object to JSON string
  const datasetJson = JSON.stringify(dataset);
  var fs = require('fs'),
    RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

// // Load CSV file
// const csvFilePath = 'dataset.csv';
// var data2=csvFileToJSON(csvFilePath)
// console.log(data2)

// // Parse CSV file
// Papa.parse(csvFilePath, {
//   header: true,
//   download: true,
//   complete: function(results) {
//     // Convert CSV to JS dataset
//     const dataset2 = results.data.map(row => ({
//       medicationA: parseInt(row.MedicationA),
//       medicationB: parseInt(row.MedicationB),
//       medicationC: parseInt(row.MedicationC),
//       medicationD: parseInt(row.MedicationD),
//       claimAmount: parseInt(row.claimingAmount),
//     }));

//     // Do something with dataset
//     console.log(dataset2);
//   },
// });
var data=[
  {
    "age": 62,
    "sex": 0,
    "bmi": 26.29,
    "children": 0,
    "smoker": 1,
    "region": 2,
    "charges": 27808.7251
},
{
    "age": 23,
    "sex": 1,
    "bmi": 34.4,
    "children": 0,
    "smoker": 0,
    "region": 3,
    "charges": 1826.843
},
{
    "age": 56,
    "sex": 0,
    "bmi": 39.82,
    "children": 0,
    "smoker": 0,
    "region": 2,
    "charges": 11090.7178
},
{
    "age": 27,
    "sex": 1,
    "bmi": 42.13,
    "children": 0,
    "smoker": 1,
    "region": 2,
    "charges": 39611.7577
},
{
    "age": 19,
    "sex": 1,
    "bmi": 24.6,
    "children": 1,
    "smoker": 0,
    "region": 3,
    "charges": 1837.237
},
{
    "age": 52,
    "sex": 0,
    "bmi": 30.78,
    "children": 1,
    "smoker": 0,
    "region": 0,
    "charges": 10797.3362
},
{
    "age": 23,
    "sex": 1,
    "bmi": 23.845,
    "children": 0,
    "smoker": 0,
    "region": 0,
    "charges": 2395.17155
},
{
    "age": 56,
    "sex": 1,
    "bmi": 40.3,
    "children": 0,
    "smoker": 0,
    "region": 3,
    "charges": 10602.385
},
{
    "age": 30,
    "sex": 1,
    "bmi": 35.3,
    "children": 0,
    "smoker": 1,
    "region": 3,
    "charges": 36837.467
},
{
    "age": 60,
    "sex": 0,
    "bmi": 36.005,
    "children": 0,
    "smoker": 0,
    "region": 0,
    "charges": 13228.84695
},
{
    "age": 30,
    "sex": 0,
    "bmi": 32.4,
    "children": 1,
    "smoker": 0,
    "region": 3,
    "charges": 4149.736
},
{
    "age": 18,
    "sex": 1,
    "bmi": 34.1,
    "children": 0,
    "smoker": 0,
    "region": 2,
    "charges": 1137.011
},
{
    "age": 34,
    "sex": 0,
    "bmi": 31.92,
    "children": 1,
    "smoker": 1,
    "region": 0,
    "charges": 37701.8768
},
{
    "age": 37,
    "sex": 1,
    "bmi": 28.025,
    "children": 2,
    "smoker": 0,
    "region": 1,
    "charges": 6203.90175
},
{
    "age": 59,
    "sex": 0,
    "bmi": 27.72,
    "children": 3,
    "smoker": 0,
    "region": 2,
    "charges": 14001.1338
},
{
    "age": 63,
    "sex": 0,
    "bmi": 23.085,
    "children": 0,
    "smoker": 0,
    "region": 0,
    "charges": 14451.83515
},
{
    "age": 55,
    "sex": 0,
    "bmi": 32.775,
    "children": 2,
    "smoker": 0,
    "region": 1,
    "charges": 12268.63225
},
{
    "age": 23,
    "sex": 1,
    "bmi": 17.385,
    "children": 1,
    "smoker": 0,
    "region": 1,
    "charges": 2775.19215
},
{
    "age": 31,
    "sex": 1,
    "bmi": 36.3,
    "children": 2,
    "smoker": 1,
    "region": 3,
    "charges": 38711
},
{
    "age": 22,
    "sex": 1,
    "bmi": 35.6,
    "children": 0,
    "smoker": 1,
    "region": 3,
    "charges": 35585.576
},
{
    "age": 18,
    "sex": 0,
    "bmi": 26.315,
    "children": 0,
    "smoker": 0,
    "region": 0,
    "charges": 2198.18985
},
{
    "age": 19,
    "sex": 0,
    "bmi": 28.6,
    "children": 5,
    "smoker": 0,
    "region": 3,
    "charges": 4687.797
},
{
    "age": 63,
    "sex": 1,
    "bmi": 28.31,
    "children": 0,
    "smoker": 0,
    "region": 1,
    "charges": 13770.0979
},
{
    "age": 28,
    "sex": 1,
    "bmi": 36.4,
    "children": 1,
    "smoker": 1,
    "region": 3,
    "charges": 51194.55914
},
{
    "age": 19,
    "sex": 1,
    "bmi": 20.425,
    "children": 0,
    "smoker": 0,
    "region": 1,
    "charges": 1625.43375
},
{
    "age": 62,
    "sex": 0,
    "bmi": 32.965,
    "children": 3,
    "smoker": 0,
    "region": 1,
    "charges": 15612.19335
},
{
    "age": 26,
    "sex": 1,
    "bmi": 20.8,
    "children": 0,
    "smoker": 0,
    "region": 3,
    "charges": 2302.3
},
{
    "age": 35,
    "sex": 1,
    "bmi": 36.67,
    "children": 1,
    "smoker": 1,
    "region": 0,
    "charges": 39774.2763
},
{
    "age": 60,
    "sex": 1,
    "bmi": 39.9,
    "children": 0,
    "smoker": 1,
    "region": 3,
    "charges": 48173.361
},
{
    "age": 24,
    "sex": 0,
    "bmi": 26.6,
    "children": 0,
    "smoker": 0,
    "region": 0,
    "charges": 3046.062
}]

var rf = new RandomForestClassifier({
    n_estimators: 10
});

rf.fit(data, null, "charges", function(err, trees){
  //console.log(JSON.stringify(trees, null, 4));
  var pred = rf.predict(dataset, trees);
  alert("Transaction Successful");
  const contractAddress = "0x8f021148e212dA7Ec148a6B6912D1ED3aFE55342"; // Replace with your smart contract address
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_sex",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_smoker",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_children",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_region",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "charges",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bmi",
          "type": "uint256"
        }
      ],
      "name": "addRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getRecord",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRecordCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] // Replace with your smart contract ABI

  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  contractInstance.methods.addRecord(sex, smoker, children, region, age, Math.round(pred[0]), Math.round(bmi))
  .send({ from: "0x83bB92448BC104489547459B58aDD459D0De724C", gas: '3000000' })
  .then(receipt => {
    console.log('Transaction successful:', receipt);
  })
  .catch(error => {
    console.error('Failed to send transaction to smart contract:', error);
  });
data.unshift({"age":age,"sex":sex,"bmi":bmi,"children":children, "smoker":smoker, "region":region ,"charges":pred[0]})
console.log(pred);
console.log(data);

}
);

  // Display the JSON string
}


const Insure = () => {
  return (
    <div className='insure mt-4'>
    
      <h1 className='text-center mt-5 mb-5'>
        Smart step to security,
        <br />
        better step to reliability
      </h1>
     
       
          
            
      <div className='claim '> 
            <div class="register">
            <div class="register1">
          <form id="myForm">
    <label for="age">Age: </label>
    <input class = "insure2" type="number" id="age" name="age"></input><p></p>
    <label  for="sex">Sex: </label>
    <select width = "100px" class = "insure2" id="sex" name="cars">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select><p></p>
    <label  for="bmi">BMI: </label>
    <input class = "insure2" type="number" id="bmi" name="bmi"></input><p></p>
    <label for="children">Children: </label>
    <input class = "insure1" type="number" id="children" name="children"></input><p></p>
    <label for="smoker">Smoker: </label>
    <select class = "insure3" id="smoker" name="smoker">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><p></p>
    <label for="region">Region: </label>
    <select class = "insure3"id="region" name="region">
      <option value="northeast">Northeast</option>
      <option value="northwest">Northwest</option>
      <option value="southeast">Southeast</option>
      <option value="southwest">Southwest</option>
    </select><p></p>
    <input type="button" value="Submit" id="submitButton2" color="red"></input>
    <input type="reset" name="cancel" color="red" value="Cancel"/>
  </form>
          </div></div>
       
          </div>
       

    </div>
  );
};
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the submit button
  document.getElementById('submitButton2').addEventListener('click', createDataset2);});
export default Insure;
