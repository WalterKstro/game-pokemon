import Instance from "@/api/request";
function createAnArray(){
    const undefinedArray = Array.from(Array(650));
    return undefinedArray.map( (_, index) => index + 1);
}

function mixinArray(){
    const orderedArray = createAnArray();
    return orderedArray.sort(() => Math.random() - 0.5);
}

async function getArrayRandomElement(){
    const [indexA, indexB, indexC, indexD] = mixinArray().splice( 0, 4 );

    const arrayPromises = [
        Instance.get( `${indexA}` ),
        Instance.get( `${indexB}` ),
        Instance.get( `${indexC}` ),
        Instance.get( `${indexD}` )
    ]

    /*Promise.all(iterable), resuelve un conjunto de promesas*/
    const arrayResultAllRequest = await Promise.all( arrayPromises )
    const arraySanitized = arrayResultAllRequest.map( ({data}) => {
        return {
            id: data.id,
            name: data.name,
        }   
    });
    
    return arraySanitized;
}


export default getArrayRandomElement;