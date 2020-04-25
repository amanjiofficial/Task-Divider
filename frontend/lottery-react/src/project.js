import web3 from './web3';

const address = '0x548f1f889703cba7075878370986f01ef4f21877';

const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "link",
				"type": "string"
			},
			{
				"name": "tid",
				"type": "uint256"
			}
		],
		"name": "addcerti",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rno",
				"type": "uint256"
			},
			{
				"name": "memname",
				"type": "string"
			},
			{
				"name": "memaddr",
				"type": "address"
			}
		],
		"name": "addmember",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "prefe",
				"type": "uint256"
			}
		],
		"name": "addPreference",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tname",
				"type": "string"
			},
			{
				"name": "tag",
				"type": "string"
			}
		],
		"name": "addtask",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "cid",
				"type": "uint256"
			}
		],
		"name": "verifycertificate",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certification",
		"outputs": [
			{
				"name": "links",
				"type": "string"
			},
			{
				"name": "taskid",
				"type": "uint256"
			},
			{
				"name": "gmemaddr",
				"type": "address"
			},
			{
				"name": "verified",
				"type": "uint256"
			},
			{
				"name": "verstatus",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currbiddone",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currtaskid",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "g_member_addr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "g_members",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "rollno",
				"type": "uint256"
			},
			{
				"name": "bal",
				"type": "uint256"
			},
			{
				"name": "currbidstat",
				"type": "bool"
			},
			{
				"name": "toverify",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "mentor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "prefer",
		"outputs": [
			{
				"name": "pref",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "tags",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tempassign",
		"outputs": [
			{
				"name": "tid",
				"type": "uint256"
			},
			{
				"name": "assignaddr",
				"type": "address"
			},
			{
				"name": "assignverify",
				"type": "uint256"
			},
			{
				"name": "assignstatus",
				"type": "bool"
			},
			{
				"name": "tname",
				"type": "string"
			},
			{
				"name": "pname",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalAssigned",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTasks",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	}
]
export default new web3.eth.Contract(abi, address);
