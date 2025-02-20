/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number) {
	let data: number[] = [];
    let nums2Data = [];

	data = [...nums1.slice(0, m)]
	data.filter((el) => el !== 0);
	
	nums2Data = [...nums2.slice(0, n)]
    nums2Data.filter((el)=> el!==0);

    data = [...data, ...nums2Data];
	data.sort((a, b) => {
		if (a < b) {
			return -1;
		} else {
			return 1;
		}
	});


    nums1.splice(0, nums1.length);
    for(const c of data){
        nums1.push(c)
    }
    

}
