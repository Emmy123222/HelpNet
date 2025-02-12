const contractABI = {
  address: "0x02573f5d356f1afd65a95d034a743477eca295ec264c5b350859e20343ace791" as `0x${string}`,
  abi:[
    {
      "name": "HelpnetImpl",
      "type": "impl",
      "interface_name": "helpnet::crowdfunding::IHelpnet"
    },
    {
      "name": "helpnet::crowdfunding::campaign",
      "type": "struct",
      "members": [
        {
          "name": "creator",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "id",
          "type": "core::integer::u128"
        },
        {
          "name": "target",
          "type": "core::integer::u128"
        },
        {
          "name": "start_balance",
          "type": "core::integer::u128"
        },
        {
          "name": "start_at",
          "type": "core::integer::u64"
        },
        {
          "name": "deadline",
          "type": "core::integer::u64"
        },
        {
          "name": "description",
          "type": "core::felt252"
        }
      ]
    },
    {
      "name": "helpnet::crowdfunding::IHelpnet",
      "type": "interface",
      "items": [
        {
          "name": "create_campaign",
          "type": "function",
          "inputs": [
            {
              "name": "start_balance",
              "type": "core::integer::u128"
            },
            {
              "name": "name",
              "type": "core::felt252"
            },
            {
              "name": "target",
              "type": "core::integer::u128"
            },
            {
              "name": "deadline",
              "type": "core::integer::u64"
            },
            {
              "name": "description",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "pledge",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            },
            {
              "name": "amount",
              "type": "core::integer::u128"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "unpledge",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            },
            {
              "name": "amount",
              "type": "core::integer::u128"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "refund",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "withdraw",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            },
            {
              "name": "amount",
              "type": "core::integer::u128"
            },
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "viewProgress",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            }
          ],
          "outputs": [
            {
              "type": "helpnet::crowdfunding::campaign"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "view_campaigns",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::array::Array::<helpnet::crowdfunding::campaign>"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "creators_campaigns",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::array::Array::<helpnet::crowdfunding::campaign>"
            }
          ],
          "state_mutability": "view"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "helpnet::crowdfunding::Helpnet::createCampaign",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "creator",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "target",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "start_balance",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "start_at",
          "type": "core::integer::u64"
        },
        {
          "kind": "data",
          "name": "deadline",
          "type": "core::integer::u64"
        },
        {
          "kind": "data",
          "name": "id",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "description",
          "type": "core::felt252"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "helpnet::crowdfunding::Helpnet::place_pledge",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "name",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "pledger",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "amount",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "balance",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "helpnet::crowdfunding::Helpnet::un_pledge",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "name",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "pledger",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "amount",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "balance",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "helpnet::crowdfunding::Helpnet::re_fund",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "name",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "amount",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "balance",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "helpnet::crowdfunding::Helpnet::fund_withdraw",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "name",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "amount",
          "type": "core::integer::u128"
        },
        {
          "kind": "data",
          "name": "from",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "to",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "helpnet::crowdfunding::Helpnet::Event",
      "type": "event",
      "variants": [
        {
          "kind": "nested",
          "name": "createCampaign",
          "type": "helpnet::crowdfunding::Helpnet::createCampaign"
        },
        {
          "kind": "nested",
          "name": "place_pledge",
          "type": "helpnet::crowdfunding::Helpnet::place_pledge"
        },
        {
          "kind": "nested",
          "name": "un_pledge",
          "type": "helpnet::crowdfunding::Helpnet::un_pledge"
        },
        {
          "kind": "nested",
          "name": "re_fund",
          "type": "helpnet::crowdfunding::Helpnet::re_fund"
        },
        {
          "kind": "nested",
          "name": "fund_withdraw",
          "type": "helpnet::crowdfunding::Helpnet::fund_withdraw"
        }
      ]
    }
  ] as const
}

export default contractABI;