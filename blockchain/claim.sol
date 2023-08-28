
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsuranceMedicationVerification {

    struct Record {
        uint256 prdictedClaim;
        uint256 beneID;
        uint256 physician;
        uint256 ClaimingAmount;
        uint256 age;
        uint256 admit;
    }
    
    mapping (uint256 => Record) private records;
    
    uint256 private recordCount = 0;
    
    function addRecord(uint256 prdictedClaim,uint256 _beneID,uint256 _physician, uint256 ClaimingAmount, uint256 _age ,uint256 _admit) public {
        
        records[recordCount] = Record(prdictedClaim,_beneID,_physician,ClaimingAmount, _age,_admit);
        recordCount++;
    }
    
    function getRecord(uint256 _id) public view returns (uint256,uint256,uint256,uint256, uint256, uint256) {
        require(_id < recordCount, "Record does not exist");
        Record memory record = records[_id];
        return (record.prdictedClaim,record.beneID,record.physician,record.ClaimingAmount, record.age, record.admit);
    }
    
    function getRecordCount() public view returns (uint256) {
        return recordCount;
    }
}