const BasMailJson = {
  "contractName": "BasMail",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "rel",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        }
      ],
      "name": "AbandMail",
      "type": "event",
      "signature": "0x0175419262f4cada22c8d14a6739ac30cea1b70b6c1568c903a7bfad75aeeb98"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "extendTime",
          "type": "uint256"
        }
      ],
      "name": "MailRecharged",
      "type": "event",
      "signature": "0x1c0239827918e02705374caee2ddd0ca4e87be1d332dd4d81940ff0aa7f5b2c4"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "aliasName",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "bcAddress",
          "type": "bytes"
        }
      ],
      "name": "MailUpdate",
      "type": "event",
      "signature": "0x572ecefef376a39b01928600d236f6e11cbff1bdb9d30a5dd7d72327c9a07c05"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "NewMail",
      "type": "event",
      "signature": "0x20f3794f70576de98bb3758dc95010f495b687345fa10628b0e4016e20a42607"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "MailRecords",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "mailHash",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "valid",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "aliasName",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "bcAddress",
          "type": "bytes"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x62288e2a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        }
      ],
      "name": "abandon",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa4242091"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "new_rel",
          "type": "address"
        }
      ],
      "name": "changeRelation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x57b29ef4"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "mailHash",
          "type": "bytes32"
        }
      ],
      "name": "domainHashOf",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1f5d78ad"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "domainHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "mailHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expire",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "aliasName",
          "type": "bytes"
        }
      ],
      "name": "newEmail",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x756c11d8"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "mailHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "extendTime",
          "type": "uint256"
        }
      ],
      "name": "recharge",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8133aff0"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rel",
      "outputs": [
        {
          "internalType": "contract BasRelations",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xce26e78a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "mailHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "aliasName",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "bcAddress",
          "type": "bytes"
        }
      ],
      "name": "updateMail",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x2ae48f5e"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051611ac2380380611ac28339818101604052602081101561003357600080fd5b810190808051906020019092919050505080806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611a2c806100966000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c010000000000000000000000000000000000000000000000000000000090048063756c11d811610078578063756c11d8146103345780638133aff0146103eb578063a424209114610423578063ce26e78a14610451576100a5565b80631f5d78ad146100aa5780632ae48f5e146100ec57806357b29ef4146101c457806362288e2a14610208575b600080fd5b6100d6600480360360208110156100c057600080fd5b810190808035906020019092919050505061049b565b6040518082815260200191505060405180910390f35b6101c26004803603606081101561010257600080fd5b81019080803590602001909291908035906020019064010000000081111561012957600080fd5b82018360208201111561013b57600080fd5b8035906020019184600183028401116401000000008311171561015d57600080fd5b90919293919293908035906020019064010000000081111561017e57600080fd5b82018360208201111561019057600080fd5b803590602001918460018302840111640100000000831117156101b257600080fd5b90919293919293905050506104bb565b005b610206600480360360208110156101da57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084f565b005b6102346004803603602081101561021e57600080fd5b8101908080359060200190929190505050610954565b60405180868152602001858152602001841515151581526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561028e578082015181840152602081019050610273565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102f45780820151818401526020810190506102d9565b50505050905090810190601f1680156103215780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6103e9600480360360a081101561034a57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103a557600080fd5b8201836020820111156103b757600080fd5b803590602001918460018302840111640100000000831117156103d957600080fd5b9091929391929390505050610ac7565b005b6104216004803603604081101561040157600080fd5b810190808035906020019092919080359060200190929190505050610fed565b005b61044f6004803603602081101561043957600080fd5b8101908080359060200190929190505050611506565b005b61045961180a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060016000838152602001908152602001600020600001549050919050565b33856000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a53a90626040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b15801561054357600080fd5b505afa158015610557573d6000803e3d6000fd5b505050506040513d602081101561056d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166333eeb127846040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050604080518083038186803b1580156105e957600080fd5b505afa1580156105fd573d6000803e3d6000fd5b505050506040513d604081101561061357600080fd5b810190808051906020019092919080519060200190929190505050915091508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614801561066c57504281115b6106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6f6e6c79206f776e657220697320696e76616c6964000000000000000000000081525060200191505060405180910390fd5b886001600082815260200190815260200160002060020160009054906101000a900460ff16610758576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806119d56023913960400191505060405180910390fd5b8888600160008d8152602001908152602001600020600301919061077d92919061182f565b508686600160008d815260200190815260200160002060040191906107a392919061182f565b507f572ecefef376a39b01928600d236f6e11cbff1bdb9d30a5dd7d72327c9a07c058a8a8a8a8a6040518086815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060405180910390a150505050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610911576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f74206163636570746564000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60016020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900460ff1690806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a1f5780601f106109f457610100808354040283529160200191610a1f565b820191906000526020600020905b815481529060010190602001808311610a0257829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610abd5780601f10610a9257610100808354040283529160200191610abd565b820191906000526020600020905b815481529060010190602001808311610aa057829003601f168201915b5050505050905085565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad9ecd0f30336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610bb557600080fd5b505afa158015610bc9573d6000803e3d6000fd5b505050506040513d6020811015610bdf57600080fd5b8101908080519060200190929190505050610c62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f7420616c6c6f77656420746f206d6f64696679000000000000000000000081525060200191505060405180910390fd5b6000600102600160008781526020019081526020016000206000015414610cf1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f656d61696c20686173206265656e20726567697374657265640000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a53a90626040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610d7457600080fd5b505afa158015610d88573d6000803e3d6000fd5b505050506040513d6020811015610d9e57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634f9a1fbb8686866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b158015610e5957600080fd5b505af1158015610e6d573d6000803e3d6000fd5b505050506040518060a0016040528087815260200186815260200160011515815260200183838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020016040518060200160405280600081525081525060016000878152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff0219169083151502179055506060820151816003019080519060200190610f519291906118af565b506080820151816004019080519060200190610f6e9291906118af565b509050507f20f3794f70576de98bb3758dc95010f495b687345fa10628b0e4016e20a42607868686604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1505050505050565b816001600082815260200190815260200160002060020160009054906101000a900460ff16611067576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806119d56023913960400191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad9ecd0f30336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561115557600080fd5b505afa158015611169573d6000803e3d6000fd5b505050506040513d602081101561117f57600080fd5b8101908080519060200190929190505050611202576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f7420616c6c6f77656420746f206d6f64696679000000000000000000000081525060200191505060405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a53a90626040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b15801561128757600080fd5b505afa15801561129b573d6000803e3d6000fd5b505050506040513d60208110156112b157600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16637dd56411866040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b15801561134957600080fd5b505afa15801561135d573d6000803e3d6000fd5b505050506040513d602081101561137357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141561140e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f6e6f207375636820656d61696c206f776e65727368697000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663c3f7beda85856040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b15801561148557600080fd5b505af1158015611499573d6000803e3d6000fd5b505050506040513d60208110156114af57600080fd5b8101908080519060200190929190505050507f1c0239827918e02705374caee2ddd0ca4e87be1d332dd4d81940ff0aa7f5b2c48484604051808381526020018281526020019250505060405180910390a150505050565b33816000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a53a90626040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b15801561158e57600080fd5b505afa1580156115a2573d6000803e3d6000fd5b505050506040513d60208110156115b857600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166333eeb127846040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050604080518083038186803b15801561163457600080fd5b505afa158015611648573d6000803e3d6000fd5b505050506040513d604081101561165e57600080fd5b810190808051906020019092919080519060200190929190505050915091508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480156116b757504281115b611729576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6f6e6c79206f776e657220697320696e76616c6964000000000000000000000081525060200191505060405180910390fd5b60006001600087815260200190815260200160002060020160006101000a81548160ff0219169083151502179055506040518060200160405280600081525060016000878152602001908152602001600020600301908051906020019061179192919061192f565b50604051806020016040528060008152506001600087815260200190815260200160002060040190805190602001906117cb92919061192f565b507f0175419262f4cada22c8d14a6739ac30cea1b70b6c1568c903a7bfad75aeeb98856040518082815260200191505060405180910390a15050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061187057803560ff191683800117855561189e565b8280016001018555821561189e579182015b8281111561189d578235825591602001919060010190611882565b5b5090506118ab91906119af565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118f057805160ff191683800117855561191e565b8280016001018555821561191e579182015b8281111561191d578251825591602001919060010190611902565b5b50905061192b91906119af565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061197057805160ff191683800117855561199e565b8280016001018555821561199e579182015b8281111561199d578251825591602001919060010190611982565b5b5090506119ab91906119af565b5090565b6119d191905b808211156119cd5760008160009055506001016119b5565b5090565b9056fe746865206d61696c206164647265737320686173206265656e206162616e646f6e6564a265627a7a723158204c77bb9a3d6436aa855dac9025b3b1414250f29dc0a9b3e5104d2866da4e989564736f6c634300050c0032",
  "networks": {
    "1337": {
      "address": "0x069C5fE891c8E4EFeCf1Fcb1A58CE0a55F741158"
    }
  }
};