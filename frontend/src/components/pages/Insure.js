import React from 'react';
const Web3 = require('web3');
const web3 = new Web3('http://localhost:3000');

function createDataset2() {
  console.log('createDataset function called');

  // Get form values
  const age = parseInt(document.getElementById('age').value);
  const weight = parseInt(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);
  var diabetes = 0
  if(document.getElementById('diabetes').value=="yes"){
    diabetes=1
  };
  var bloodp = 0
  if(document.getElementById('bloodp').value=="yes"){
    bloodp=1
  };
  var transplant = 0
  if(document.getElementById('transplant').value=="yes"){
    transplant=1
  };
  var chronic = 0
  if(document.getElementById('chronic').value=="yes"){
    chronic=1
  };
  var allergy = 0
  if(document.getElementById('allergy').value=="yes"){
    allergy=1
  };
  var cancer = 0
  if(document.getElementById('cancer').value=="yes"){
    cancer=1
  };
  var surgery = 0
  if(document.getElementById('surgery').value=="yes"){
    surgery=1
  }

  // Create a dataset object
  const dataset = [{
    'Age':age,'Diabetes':diabetes,'BloodPressureProblems':bloodp,'AnyTransplants':transplant,'AnyChronicDiseases':chronic,
    'Height':height,'Weight':weight,'KnownAllergies':allergy,'HistoryOfCancerInFamily':cancer,'NumberOfMajorSurgeries':surgery
  }];
  console.log(dataset);

  // Convert the dataset object to JSON string
  const datasetJson = JSON.stringify(dataset);
  var fs = require('fs'),
    RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

var data=[
  {
      "Age": 45,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 155,
      "Weight": 57,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 25000
  },
  {
      "Age": 60,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 180,
      "Weight": 73,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 29000
  },
  {
      "Age": 36,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 158,
      "Weight": 59,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 52,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 183,
      "Weight": 93,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 38,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 166,
      "Weight": 88,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 30,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 160,
      "Weight": 69,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 33,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 150,
      "Weight": 54,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 21000
  },
  {
      "Age": 23,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 181,
      "Weight": 79,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 48,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 169,
      "Weight": 74,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 23000
  },
  {
      "Age": 38,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 182,
      "Weight": 93,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 23000
  },
  {
      "Age": 60,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 175,
      "Weight": 74,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 66,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 186,
      "Weight": 67,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 25000
  },
  {
      "Age": 24,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 178,
      "Weight": 57,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 15000
  },
  {
      "Age": 46,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 184,
      "Weight": 97,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 35000
  },
  {
      "Age": 18,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 1,
      "AnyChronicDiseases": 0,
      "Height": 150,
      "Weight": 76,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 15000
  },
  {
      "Age": 38,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 160,
      "Weight": 68,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 42,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 149,
      "Weight": 67,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 30000
  },
  {
      "Age": 38,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 154,
      "Weight": 82,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 23000
  },
  {
      "Age": 57,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 156,
      "Weight": 61,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 25000
  },
  {
      "Age": 21,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 186,
      "Weight": 97,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 49,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 160,
      "Weight": 97,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 20,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 181,
      "Weight": 81,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 35,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 163,
      "Weight": 92,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 32000
  },
  {
      "Age": 35,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 175,
      "Weight": 83,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 53,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 151,
      "Weight": 97,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 1,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 35000
  },
  {
      "Age": 31,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 172,
      "Weight": 57,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 21000
  },
  {
      "Age": 22,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 1,
      "AnyChronicDiseases": 0,
      "Height": 151,
      "Weight": 97,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 60,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 151,
      "Weight": 88,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 30,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 162,
      "Weight": 73,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 23000
  },
  {
      "Age": 33,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 153,
      "Weight": 58,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 21000
  },
  {
      "Age": 22,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 168,
      "Weight": 96,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 15000
  },
  {
      "Age": 26,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 152,
      "Weight": 91,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 19000
  },
  {
      "Age": 28,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 158,
      "Weight": 68,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 26,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 154,
      "Weight": 88,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 64,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 172,
      "Weight": 85,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 3,
      "PremiumPrice": 28000
  },
  {
      "Age": 50,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 161,
      "Weight": 79,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 44,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 157,
      "Weight": 55,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 23000
  },
  {
      "Age": 58,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 147,
      "Weight": 61,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 25000
  },
  {
      "Age": 43,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 173,
      "Weight": 81,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 1,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 30000
  },
  {
      "Age": 24,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 1,
      "AnyChronicDiseases": 0,
      "Height": 168,
      "Weight": 91,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 20,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 163,
      "Weight": 68,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 66,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 179,
      "Weight": 96,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 2,
      "PremiumPrice": 28000
  },
  {
      "Age": 25,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 184,
      "Weight": 55,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 1,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 15000
  },
  {
      "Age": 52,
      "Diabetes": 0,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 181,
      "Weight": 82,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 29000
  },
  {
      "Age": 26,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 165,
      "Weight": 57,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 15000
  },
  {
      "Age": 44,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 178,
      "Weight": 78,
      "KnownAllergies": 1,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 23000
  },
  {
      "Age": 25,
      "Diabetes": 1,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 179,
      "Weight": 69,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 32000
  },
  {
      "Age": 54,
      "Diabetes": 1,
      "BloodPressureProblems": 0,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 1,
      "Height": 174,
      "Weight": 96,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 0,
      "PremiumPrice": 35000
  },
  {
      "Age": 64,
      "Diabetes": 0,
      "BloodPressureProblems": 1,
      "AnyTransplants": 0,
      "AnyChronicDiseases": 0,
      "Height": 156,
      "Weight": 56,
      "KnownAllergies": 0,
      "HistoryOfCancerInFamily": 0,
      "NumberOfMajorSurgeries": 1,
      "PremiumPrice": 25000
  }
]

var rf = new RandomForestClassifier({
    n_estimators: 10
});

rf.fit(data, null, "charges", function(err, trees){
  //console.log(JSON.stringify(trees, null, 4));
  var pred = rf.predict(dataset, trees);
  console.log(pred)
  alert("Transaction Successful");
  const contractAddress = "0x05783f73B9bC025Cf610c456FA66FDDB3a6540a3"; // Replace with your smart contract address
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Age",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "Diabetes",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "BloodPressureProblems",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "AnyTransplants",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "AnyChronicDiseases",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "Height",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "Weight",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "KnownAllergies",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "HistoryOfCancerInFamily",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "NumberOfMajorSurgeries",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "PremiumPrice",
          "type": "uint8"
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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

  contractInstance.methods.addRecord(age,diabetes,bloodp,transplant,chronic,height,weight,allergy,cancer,surgery,pred[0])
  .send({ from: 0x83bB92448BC104489547459B58aDD459D0De724C, gas: '3000000' })
  .then(receipt => {
    console.log('Transaction successful:', receipt);
  })
  .catch(error => {
    console.error('Failed to send transaction to smart contract:', error);
  });
data.unshift({'Age':age,'Diabetes':diabetes,'BloodPressureProblems':bloodp,'AnyTransplants':transplant,'AnyChronicDiseases':chronic,
'Height':height,'Weight':weight,'KnownAllergies':allergy,'HistoryOfCancerInFamily':cancer,'NumberOfMajorSurgeries':surgery,'PremiumPrice':pred[0]})
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
    <label for="ag">Age: </label>
    <input  type="number" id="age" name="age"></input><br></br><br></br>
    <label for="h">Height: </label>
    <input  type="number" id="height" name="h"></input><br></br><br></br>
    
    <label for="w">Weight: </label>
    <input  type="number" id="weight" name="w"></input><br></br><br></br>
    <label for="D">Diabetes: </label>
    <select class = "insure3" id="diabetes" name="D">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>
    <label for="bp">Blood Pressure: </label>
    <select class = "insure3" id="bloodp" name="bp">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>
    <label for="K">KnownAllergies: </label>
    <select class = "insure3" id="allergy" name="K">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>

    <label for="At">Any Transplants: </label>
    <select class = "insure3" id="transplant" name="At">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>

    <label for="C">AnyChronicDiseases: </label>
    <select class = "insure3" id="chronic" name="C">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>
    {/* <label  for="sex">Sex: </label>
    <select width = "100px" class = "insure2" id="sex" name="cars">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select><p></p><br></br> */}
    {/* <label  for="bmi">BMI: </label>
    <input class = "insure2" type="number" id="bmi" name="bmi"></input><p></p><br></br>
    <label for="children">Children: </label> */}
    {/* <input class = "insure1" type="number" id="children" name="children"></input><p></p><br></br> */}
    {/* <label for="smoker">Smoker: </label>
    <select class = "insure3" id="smoker" name="smoker">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>
    */}
    <label for="hi">History of Cancer in family: </label>
    <select class = "insure3" id="cancer" name="hi">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>

    <label for="No">Number Of Major Surgeries: </label>
    <select class = "insure3" id="surgery" name="No">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select><br></br><br></br>
    
    <input type="button" value="Submit" id="submitButton2" color="red"></input>
    <input type="reset" name="cancel" color="red" value="Cancel"/>
  </form>
          </div></div>
       
          </div>
       

    </div>
  );
};

// document.addEventListener('DOMContentLoaded', function() {
//   // Add event listener to the submit button
//   document.getElementById('submitButton2').addEventListener('click', createDataset2);});
export default Insure;
