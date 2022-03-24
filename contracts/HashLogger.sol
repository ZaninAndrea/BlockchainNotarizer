// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract HashLogger {
	address private owner;
	event DataBlock(bytes32 indexed data);
    
	constructor() {
		owner = msg.sender;
	}
    
	function record(bytes32 _data) public payable {    
		require(msg.sender == owner);
		emit DataBlock(_data);
	}
}