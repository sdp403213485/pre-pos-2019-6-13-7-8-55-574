'use strict';

function collectSameElements(collectionA, collectionB) 
{ 
	var result = new Array();
	var collectionC=collectionB.value;
	for(var i = 0; i<collectionA.length ; i++) 
	{ 
		for(var j = 0; j<collectionC.length ; j++)
		{
			if (collectionA[i].key == collectionC[j]) 
			{ 
				result.push(collectionC[j]); 
				break; 
			}
		} 
	} 
	 return result; 
	}
