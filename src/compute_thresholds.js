/** Sort values into ascending order
*
*/
function sortArr(arr){
    var ary = arr.slice();
    ary.sort(function(a,b){ return parseFloat(a) - parseFloat(b);});
    return ary;
}

/** Calculate the 'q' quartile of an array of values
*
* @arg arr - array of values
* @arg q - percentile to calculate (e.g. 95)
*/
function calcQuartile(arr,q){
    var a = arr.slice();
    // Turn q into a decimal (e.g. 95 becomes 0.95)
    q = q/100;

    // Sort the array into ascending order
    data = sortArr(a);

    // Work out the position in the array of the percentile point
    var p = ((data.length) - 1) * q;
    var b = Math.floor(p);

    // Work out what we rounded off (if anything)
    var remainder = p - b;

    // See whether that data exists directly
    if (data[b+1]!==undefined){
        return parseFloat(data[b]) + remainder * (parseFloat(data[b+1]) - parseFloat(data[b]));
    }else{
        return parseFloat(data[b]);
    }
}


module.exports = function(all_components,all_files) {
	loc = [];
	N_props = [];
	NM = [];
	NA = [];

	for (const component of all_components){
		loc.push(component['loc']);
		N_props.push(component['properties'].length);
		NM.push(component['classMethods'].length+component['functions'].length);
		NA.push(component['classProperties'].length);
	}

	loc_files = [];
	N_components = [];
	N_functions = [];
	N_imports = [];
	for (const file of all_files){
		loc_files.push(file['LOC']);
		N_components.push(file['N_Components']);
		N_functions.push(file['N_Functions']);
		N_imports.push(file['N_Imports']);
	}

	thresholds = {}
	//Components
	thresholds['LOC_Component'] = calcQuartile(loc,95);
	thresholds['N_props'] = calcQuartile(N_props,95);
	thresholds['NM'] = calcQuartile(NM,95);
	thresholds['NA'] = calcQuartile(NA,95);
	//Files
	thresholds['LOC_File'] = calcQuartile(loc_files,95);
	thresholds['N_Components'] = calcQuartile(N_components,95);
	thresholds['N_Functions'] = calcQuartile(N_functions,95);
	thresholds['N_Imports'] = calcQuartile(N_imports,95);

	return thresholds;
}

// module.exports = function(components, loc_files) {

// 	thresholds = {}
// 	thresholds['LOC_Files'] = calcQuartile(loc_files,95);
// 	thresholds['LOC_Component'] = calcQuartile(loc,95);
// 	thresholds['N_props'] = calcQuartile(N_props,95);
// 	thresholds['NM'] = calcQuartile(NM,95);
// 	thresholds['NA'] = calcQuartile(NA,95);

// 	return thresholds;
// }