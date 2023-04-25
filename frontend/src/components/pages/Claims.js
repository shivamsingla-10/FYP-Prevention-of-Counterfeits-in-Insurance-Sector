import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/Repeat_Grid_5.png';
import image1 from '../../img/Icon_feather-check-circle.png';
import image2 from '../../img/Icon_feather-clock.png';

const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

function createDataset() {
  console.log('createDataset function called');

  // Get form values
  const medA = document.getElementById('medA').value;
  const medB = document.getElementById('medB').value;
  const medC = document.getElementById('medC').value;
  const medD = document.getElementById('medD').value;
  const claimAmount = document.getElementById('claimAmount').value;

  // Create a dataset object
  const dataset = [{
      "Medication A": medA,
      "Medication B": medB,
      "Medication C": medC,
      "Medication D": medD
  }];
  console.log(dataset);

  // Convert the dataset object to JSON string
  // const datasetJson = JSON.stringify(dataset);
  var fs = require('fs'),
    RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

var data=[
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 500
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1000
    },
    {
        "Medication A": 1,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 0,
        "Insurance claiming amount": 750
    },
    {
        "Medication A": 0,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 1,
        "Insurance claiming amount": 900
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 600
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1200
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 500
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1000
    },
    {
        "Medication A": 1,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 0,
        "Insurance claiming amount": 750
    },
    {
        "Medication A": 0,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 1,
        "Insurance claiming amount": 900
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 600
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1200
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 500
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1000
    },
    {
        "Medication A": 1,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 0,
        "Insurance claiming amount": 750
    },
    {
        "Medication A": 0,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 1,
        "Insurance claiming amount": 900
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 600
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1200
    },
    {
        "Medication A": 0,
        "Medication B": 1,
        "Medication C": 1,
        "Medication D": 0,
        "Insurance claiming amount": 500
    },
    {
        "Medication A": 1,
        "Medication B": 0,
        "Medication C": 0,
        "Medication D": 1,
        "Insurance claiming amount": 1000
    },
    {
        "Medication A": 1,
        "Medication B": 1,
        "Medication C": 0,
        "Medication D": 0,
        "Insurance claiming amount": 750
    },
    {
        "Medication A": 0,
        "Medication B": 0,
        "Medication C": 1,
        "Medication D": 1,
        "Insurance claiming amount": 900
    }]

var rf = new RandomForestClassifier({
    n_estimators: 10
});

rf.fit(data, null, "Insurance claiming amount", function(err, trees){
  //console.log(JSON.stringify(trees, null, 4));
  var pred = rf.predict(dataset, trees);
  if(pred[0]>=claimAmount){
    alert("Transaction Successful");
    const contractAddress = "0x244D32d32ca3bD0f746A356FDD1C8591449B655C"; // Replace with your smart contract address
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "_medicationA",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "_medicationB",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "_medicationC",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "_medicationD",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "ClaimingAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "predictedClaimingAmount",
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
    ]; // Replace with your smart contract ABI

    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    contractInstance.methods.addRecord(medA, medB, medC, medD, claimAmount, pred[0])
    .send({ from: "0x5dFAE6Ddf52f4D2cEDB8018641dF5814f4eb3e29", gas: '3000000' })
    .then(receipt => {
      console.log('Transaction successful:', receipt);
    })
    .catch(error => {
      console.error('Failed to send transaction to smart contract:', error);
    });
    }
    else{
      alert("Transaction Unsuccessful")
    }

  console.log(pred);

  // pred = ["virginia, "setosa"]
});

  // Display the JSON string
}

const Claims = () => {
  return (
    <section className=' container-fliud claimsPage '>
      <div className=' mt-5'>
        <h1 className='motto text-center '>
          You need not face the impending alone
        </h1>
        <p className='saying text-center my-4'>
          Claims are handled by our AI and our fantastic team.
          <br />
          File for a claim and blink, we’re there.
        </p>
        <div className='claims mx-md-5'>
          <div className='text-center mr-md-5 claimBtnA'>
          <form id="myForm">
    <label for="medA">Medication A:</label>
    <input type="number" id="medA" name="medA"></input><br></br><br></br>
    <label for="medB">Medication B:</label>
    <input type="number" id="medB" name="medB"></input><br></br><br></br>
    <label for="medC">Medication C:</label>
    <input type="number" id="medC" name="medC"></input><br></br><br></br>
    <label for="medD">Medication D:</label>
    <input type="number" id="medD" name="medD"></input><br></br><br></br>
    <label for="claimAmount">Claim Amount:</label>
    <input type="number" id="claimAmount" name="claimAmount"></input><br></br><br></br>
    <input type="button" value="Submit" id="submitButton"></input>
  </form>
          </div>
        </div>
        <div className='text-center mr-md-5 claimBtnB'>
          <Link className='claimsBtn btn btn-lg  px-5 ' to='/claims'>
            Fill Claim Form
          </Link>
        </div>
        <div className='container text-center mt-5'>
          <div className='row '>
            <div className='col-md-4 '>
              <img src={image1} className='w-10' alt='' />
              <h1 className='claimStats'>3sec</h1>
              <p className='claimP'>World record claim handling</p>
            </div>
            <div className='col-md-4'>
              <img src={image} className='w-50 mt-md-3 mb-md-4' alt='' />
              <h1 className='claimStats'>+4.9</h1>
              <p className='claimP'>Claims rating online</p>
            </div>
            <div className='col-md-4 '>
              <img src={image2} className='w-10 ' alt='' />
              <h1 className='claimStats'>50%</h1>
              <p className='claimP'>Of claims handled instantly</p>
            </div>
          </div>
          <div className='text-center mt-3 mb-5 '>
            <Link className='claimsBtn btn btn-lg  px-5' to='/claims'>
              Fill Claim Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the submit button
  document.getElementById('submitButton').addEventListener('click', createDataset);});
export default Claims;

