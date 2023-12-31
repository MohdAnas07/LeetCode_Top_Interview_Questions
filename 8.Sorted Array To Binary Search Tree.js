// 108. Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    // Call the function recursively on each subtree
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
}