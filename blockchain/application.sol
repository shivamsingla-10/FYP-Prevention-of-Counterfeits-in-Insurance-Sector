
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsuranceApplication {

    struct Record {
        uint256 Age;
        uint8 Diabetes;
        uint8 BloodPressureProblems;
        uint8 AnyTransplants;
        uint8 AnyChronicDiseases;
        uint8 Height;
        uint8 Weight;
        uint8 KnownAllergies;
        uint8 HistoryOfCancerInFamily;
        uint8 NumberOfMajorSurgeries;
        uint256 PremiumPrice;
    }
    
    mapping (uint256 => Record) private records;
    
    uint256 private recordCount = 0;
    
    function addRecord(uint256 Age,uint8 Diabetes,uint8 BloodPressureProblems,uint8 AnyTransplants,uint8 AnyChronicDiseases,uint8 Height,uint8 Weight,uint8 KnownAllergies,uint8 HistoryOfCancerInFamily,uint8 NumberOfMajorSurgeries,uint256 PremiumPrice) public {
        
        records[recordCount] = Record(Age,Diabetes,BloodPressureProblems,AnyTransplants,AnyChronicDiseases,Height,Weight,KnownAllergies,HistoryOfCancerInFamily,NumberOfMajorSurgeries,PremiumPrice);
        recordCount++;
    }
    
    function getRecord(uint256 _id) public view returns (uint256 ,uint8 ,uint8 ,uint8 ,uint8 ,uint8 ,uint8 ,uint8 ,uint8 ,uint8 ,uint256 ) {
        require(_id < recordCount, "Record does not exist");
        Record memory record = records[_id];
        return ( record.Age, record.Diabetes, record.BloodPressureProblems, record.AnyTransplants, record.AnyChronicDiseases, record.Height, record.Weight, record.KnownAllergies, record.HistoryOfCancerInFamily, record.NumberOfMajorSurgeries, record.PremiumPrice);
    }
    
    function getRecordCount() public view returns (uint256) {
        return recordCount;
    }
}