import math
import functools

data_amount = int(input())
array_to_order = list(map(lambda str: int(str), input().split(' ')))

def mergeSort(myList):
    #extract sublists
    sublist_amount = math.trunc((len(myList) + 1) / 2)
    sublists = []
    for i in range(sublist_amount):
        current_sublist = myList[ i*2 : (i+1)*2 ] 
        sublists.append(current_sublist)
    
    #sort sublists
    def sortPair(myList):
        if len(myList) == 1:
            return myList
        elif myList[0] < myList[1]:
            return myList
        else:
            return [myList[1],myList[0]]

    orderedSublists = list(map(sortPair, sublists))

    #mergeSublists
    def mergeSorted(list1, list2):
        mergedList = []
        list1Count = 0
        list2Count = 0
        while list1Count < len(list1) and list2Count < len(list2):
            if list1[list1Count] < list2[list2Count]:
                mergedList.append(list1[list1Count])
                list1Count += 1
            else:
                mergedList.append(list2[list2Count])
                list2Count += 1
        
        if list1Count < len(list1):
            mergedList += list1[list1Count:]
        elif list2Count < len(list2):
            mergedList += list2[list2Count:]
        return mergedList

    sortedList = functools.reduce(mergeSorted, orderedSublists)
    return sortedList

sorted_array = mergeSort(array_to_order)
sorted_indexes = map(lambda item : array_to_order.index(item) + 1, sorted_array)
print(*sorted_indexes)
