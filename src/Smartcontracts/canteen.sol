// SPDX-License-Identifier: MIT
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Canteen {
    string public name = "Kalssy Cafe";
    address public Owner;
    address public Contractor;
    int public total_users = 0;


    constructor() {
        Owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == Owner);
        _;
    }

    function setContractor(address _contracter) public onlyOwner {
        Contractor = _contracter;
    }

    struct User {
        address add;
        string meal;
        string username;
        string expiry;
        string Transactions;
        string Penalty;
    }


    mapping(address => User) public userDetails;

    function setUser(
        string memory _meal,
        string memory _username,
        string memory _expiry
    ) public {
        // ? set add update function
        checkUser(msg.sender);
        userDetails[msg.sender] = User(msg.sender, _meal, _username, _expiry,"","");
        total_users++;
    }

    function getUser(address useraddress)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        User storage user = userDetails[useraddress];
        // ? msg.sender === contract interaction address
        return (user.add, user.meal, user.username, user.expiry,user.Transactions,user.Penalty);
    }

    function setTransaction(string memory data) public
    {
        userDetails[msg.sender].Transactions = concatenate(userDetails[msg.sender].Transactions,data);
        // userDetails[msg.sender].Transactions = data;
    }

    function setPenalty(string memory data) public
    {
        userDetails[msg.sender].Penalty = concatenate(userDetails[msg.sender].Penalty,data);
        // userDetails[msg.sender].Transactions = data;
    }

    function concatenate(string memory a,string memory b) internal pure returns (string memory){
        return string(bytes.concat(bytes(a), " ", bytes(b)));
    } 
    
    mapping(address => bool) registerd;
    address[] public registeredArray; // added the array
 
    function checkUser(address _address) internal {
    if(!registerd[_address]) {
        registerd[_address] = true;
        registeredArray.push(_address); // push to the array
    }
}

}


// Contract Address : "0x23AAc9E3646b402FAF954f8ec2B254c087f1545F" 
// [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_contracter",
// 				"type": "address"
// 			}
// 		],
// 		"name": "setContractor",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "data",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setPenalty",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "data",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setTransaction",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_meal",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_username",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_expiry",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setUser",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "Contractor",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "useraddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getUser",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "Owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "registeredArray",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "total_users",
// 		"outputs": [
// 			{
// 				"internalType": "int256",
// 				"name": "",
// 				"type": "int256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "userDetails",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "add",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "meal",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "username",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "expiry",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "Transactions",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "Penalty",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]