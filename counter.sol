// SPDX-License-Identifier: MIT
pragma solidity >=0.7.4;
contract FirstContract {
int public count = 0;
    function incr() public{
        count++;
    }
    function decr() public{
        count--;
        
    }
    function display() public view returns (int){

    }
}




// So in counter.sol we have 3 functions and one public variable which maintains the counter.
// By Default, a contract state is read-only unless it is specified as public, so we have made all the functions public.


// The view functions are read-only functions, which ensures that state variables cannot be modified after calling them. As the display() function won’t be modifying the variable, it is kept to view function.

