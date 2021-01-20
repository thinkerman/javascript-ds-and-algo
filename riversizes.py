
def find_first_double(nums, n):  # ([1,2,2,2,3,3,3,4], 4)
    idx = 0  # 0,1
    while idx < len(nums):  # (0<9)=>True
        num = nums[idx]  # 1
        num_count = 0  # 0,1
        # (0<9)and(1==1)=>True, (1<9)and(2==1)=>False
        while idx < len(nums) and nums[idx] == num:
            num_count += 1  # 1
            idx += 1  # 1

        if num_count == 2:
            return num

    return -1


assert find_first_double([1, 2, 2, 2, 3, 3, 3, 4, 4], 2) == 4
assert find_first_double([], 2) == -1
assert find_first_double([1, 2], 2) == -1
print(find_first_double([1, 2, 2, 2, 3, 3, 3, 4, 4], 2))
print("All test cases passed.")




def riverSizes(matrix):
    seen = set()
    result = []
    for row_idx in range(len(matrix)):
        for col_idx in range(len(matrix[0])):
            cell_value = matrix[row_idx][col_idx]
            if cell_value == 1 and (row_idx, col_idx) not in seen:
                river_size = determine_river_size((row_idx, col_idx), matrix, seen)
                result.append(river_size)
    
    return result
                

def determine_river_size(cell, matrix, seen):
    stack = [cell]
    seen.add(cell)
    river_size = 0
    while stack:
        current_cell = stack.pop()
        river_size += 1
        for row_idx, col_idx in get_children(current_cell, matrix):
            if matrix[row_idx][col_idx] == 1 and (row_idx, col_idx) not in seen:
                stack.append((row_idx, col_idx))
                seen.add((row_idx, col_idx))
    
    return river_size
            
        
def get_children(cell, matrix):
    row_idx, col_idx = cell[0], cell[1]
    children = []
    if row_idx + 1 < len(matrix):
        children.append((row_idx + 1, col_idx))
    if row_idx - 1 >= 0:
        children.append((row_idx - 1, col_idx))
    if col_idx + 1 < len(matrix[0]):
        children.append((row_idx, col_idx + 1))
    if col_idx - 1 >= 0:
        children.append((row_idx, col_idx - 1))
    
    return children
