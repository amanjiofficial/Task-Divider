import web3 from './web3';

const address = '0x960b81a3de1abebc0902ad20be57592bebdfc6ac';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "certid",
				"type": "uint256"
			},
			{
				"name": "link",
				"type": "string"
			},
			{
				"name": "tid",
				"type": "uint256"
			},
			{
				"name": "srollno",
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
				"name": "taid",
				"type": "uint256"
			},
			{
				"name": "tname",
				"type": "string"
			},
			{
				"name": "tag",
				"type": "string"
			},
			{
				"name": "weights",
				"type": "uint256"
			}
		],
		"name": "addtask",
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
				"name": "cid",
				"type": "uint256"
			},
			{
				"name": "links",
				"type": "string"
			},
			{
				"name": "taskid",
				"type": "uint256"
			},
			{
				"name": "srno",
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
		"name": "fmember",
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
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"name": "tid",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "tags",
				"type": "string"
			},
			{
				"name": "weightage",
				"type": "uint256"
			},
			{
				"name": "srno",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	}
];
export default new web3.eth.Contract(abi, address);
