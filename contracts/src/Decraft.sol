
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract DeCraft is ERC721URIStorage {

    uint256 private _tokenIdCounter;

    mapping(uint256 => uint256) craftAmountRaised;

    event CraftSupported(uint256 indexed craftId, uint256 indexed amount);

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {

    }

    function mintToken(string memory jsonURI) external returns (uint256) {
        uint256 newTokenId = _tokenIdCounter;
        craftAmountRaised[newTokenId] = 0;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, jsonURI);
        _tokenIdCounter++;
        return newTokenId;
    }

    function donate(uint256 craftId, uint256 amount) public {
        require(craftId <= _tokenIdCounter, "craft not found");
        craftAmountRaised[craftId] += amount;

        emit CraftSupported(craftId, amount);
    }

}