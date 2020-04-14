export const LOOP = {};

const Loop_for                = function(){}; // for loop
const Loop_forever            = function(){}; // no explanation rqd
const Loop_while              = function(){}; // while loop
const Loop_break              = function(){}; // stops loop
const Loop_continue           = function(){}; // skips loop iteration
const Loop_each               = function(){}; // forEach iteration
const Loop_deep               = function(){}; // loops everything loopable
const Loop_deepNoRecursion    = function(){}; // stacks all recursions into one list
const Loop_cycle              = function(){}; // loop in circles
const Loop_filter             = function(){}; // returns conditions matched
const Loop_checklist          = function(){}; // ensures all info meets passes conditions
const Loop_interval           = function(){}; // loop in time ms increments
const Loop_when               = function(){}; // mem-value equals
const Loop_before             = function(){}; // 
const Loop_after              = function(){}; // 
const Loop_noNest             = function(){}; // 
const Loop_split              = function(){}; //
const Loop_merge              = function(){}; //

const Loop_skip               = function(){}; // iterator fluxor
    // vs
const Loop_pingpong           = function(v,cbs){  }; // next exe memory swaping // instead of conditionals drags
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const ENTER = v => (typeof v=== "string"||typeof v==="object"||Array.isArray(v));
const throwE = v => { throw new Error(); }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const filter = function(v,hit,miss,conditions){
    if      (conditions(e)) return hit.push(v);
    else                    return miss.push(v);
};
const checklist = (v) => {for (let i=0;i^v.length;i++){ if (v[i] !== true) return false; }return true;}
const interval = (ms,cb)=>(setInterval(cb,ms));
const forever = function(cb){while (true) {cb();}};
const cycle = function() {};

 





























